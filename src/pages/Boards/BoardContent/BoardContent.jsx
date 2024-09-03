import ListColumns from './ListColumns/ListColumns'
import Box from '@mui/material/Box'
import { mapOrder } from '~/utils/sorts'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/ListColumn/Column'
import Card from './ListColumns/ListColumn/ListCards/Card/Card'
import {
  DndContext,
  useSensor,
  useSensors,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners
} from '@dnd-kit/core'
import { cloneDeep, isEmpty } from 'lodash'
import { generatePlaceholderCard } from '~/utils/formatter'

import {
  MouseSensor,
  TouchSensor
} from '~/customLibraries/DndKitSensors'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}


function BoardContent({ board, createNewColumn, createNewCard }) {

  // const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } })
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolenrance: 50 } })
  const sensors = useSensors(mouseSensor, touchSensor)

  const [orderedColumns, setOrderedColumns] = useState([])
  // cung 1 thoi diem chi co 1 phan tu dc keo [colum or card]
  const [activeDragItemId, setActiveDragItemId] = useState([null])
  const [activeDragItemType, setActiveDragItemType] = useState([null])
  const [activeDragItemData, setActiveDragItemData] = useState([null])
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState([null])
  useEffect(() => {
    const orderedColumns = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumns(orderedColumns)
  }, [board])

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find(column => column?.cards?.map(card => card._id)?.includes(cardId))
  }

  const moveCardBetweenDifferentColumns = (
    overColumn,
    overCardId,
    active,
    over,
    activeColumn,
    activeDraggingCardId,
    activeDraggingCardIdData
  ) => {
    // if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN || ) {
    //   console.log('data: ,', activeDraggingCardIdData?.FE_PlaceholderCard)
    // }
    setOrderedColumns(prevColumns => {
      const overCardIndex = overColumn?.cards?.findIndex(card => card._id === overCardId)
      // console.log('over index: ', overCardIndex)
      let newCardIndex
      const isBelowOverItem = active.rect.current.translated &&
        active.rect.current.translated.top > over.rect.top + over.rect.height
      const modifier = isBelowOverItem ? 1 : 0
      newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

      const nextColumns = cloneDeep(prevColumns)
      const nextActiveColumn = nextColumns.find(column => column._id === activeColumn._id)
      const nextOverColumn = nextColumns.find(column => column._id === overColumn._id)

      if (nextActiveColumn) {
        // xoa card dang keo
        nextActiveColumn.cards = nextActiveColumn.cards.filter(card => card._id !== activeDraggingCardId)

        // them place holder card
        if (isEmpty(nextActiveColumn.cards)) {
          nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)]
        }
        // cap nhat lai mang cardOrderIds
        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(card => card._id)
      }

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter(card => card._id !== activeDraggingCardId)

        // update lai columnId cho card sau khi card nhay vao column moi
        const rebuild_activeDragingCardData = {
          ...activeDraggingCardIdData,
          columnId: nextOverColumn._id
        }

        nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, rebuild_activeDragingCardData)

        // xoa holder khi column sap co them card chuan?
        nextOverColumn.cards = nextOverColumn.cards = nextOverColumn.cards.filter(card => !card.FE_PlaceholderCard)

        nextOverColumn.cardOrderIds = nextOverColumn.cards.map(card => card._id)

      }
      return [...nextColumns]//console.log('over card id: ',overCardIndex)
    })
  }

  const handleDragStart = (event) => {
    // console.log('DragStart', event)
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)

    // neu keo card thi set gia tri column cua no vao bien luu tru old column thu 2
    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id))
    }
  }

  const handleDragOver = (event) => {

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    // console.log('DragOver', event)
    const { active, over } = event
    if (!over || !active) return
    const { id: activeDraggingCardId, data: { current: activeDraggingCardIdData } } = active
    const { id: overCardId } = over

    // tim column cua ActiveCard va OverCard
    const activeColumn = findColumnByCardId(activeDraggingCardId)
    const overColumn = findColumnByCardId(overCardId)


    if (!activeColumn || !overColumn) return

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardIdData
      )
    }
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over || !active) return
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const { id: activeDraggingCardId, data: { current: activeDraggingCardIdData } } = active
      const { id: overCardId } = over

      // tim column cua ActiveCard va OverCard
      const activeColumn = findColumnByCardId(activeDraggingCardId)
      const overColumn = findColumnByCardId(overCardId)

      if (!activeColumn || !overColumn) return

      // keo tha card
      if (oldColumnWhenDraggingCard._id !== overColumn._id) {
        moveCardBetweenDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardIdData
        )
      } else {

        // console.log('DragEnd', event)
        // lay vi tri cu tu thang active
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex(c => c._id === activeDragItemId)
        // lay vi tri moi tu thang over
        const newCardIndex = overColumn?.cards?.findIndex(c => c._id === overCardId)

        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard.cards, oldCardIndex, newCardIndex)

        setOrderedColumns(prevColumns => {
          const nextColumns = cloneDeep(prevColumns)
          const targetColumn = nextColumns.find(column => column._id === overColumn._id)
          targetColumn.cards = dndOrderedCards
          targetColumn.cardOrderIds = dndOrderedCards.map(card => card._id)
          return nextColumns
        })
      }
    }
    // keo column, sap xep thu tu cac column
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      // console.log('card')
      if (active.id !== over.id) {
        // console.log('DragEnd', event)
        // lay vi tri cu tu thang active
        const oldColumnIndex = orderedColumns.findIndex(c => c._id === active.id)
        // lay vi tri moi tu thang over
        const newColumnIndex = orderedColumns.findIndex(c => c._id === over.id)
        // if (oldColumnIndex < 0) return
        const dndOrderedColumns = arrayMove(orderedColumns, oldColumnIndex, newColumnIndex)

        // api update to database
        // const dndOrderedColumnsIds = dndOrderedColumns.map(c => c.id)

        setOrderedColumns(dndOrderedColumns)
      }

    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
    setOldColumnWhenDraggingCard(null)
  }

  const myDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  // video 37


  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      sensors={sensors}
      collisionDetection={closestCorners}
    >

      <Box sx={{

        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
        <ListColumns
          columns={orderedColumns}
          createNewColumn={createNewColumn}
          createNewCard={createNewCard}
        />
        <DragOverlay dropAnimation={myDropAnimation}>
          {!activeDragItemType && null}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && <Column column={activeDragItemData} />}
          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
