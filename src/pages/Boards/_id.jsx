import Container from '@mui/material/Container'
import AppBar from '~/components/AppBar/AppBar'
import BoardBar from './BoardBar/BoardBar'
import BoardContent from './BoardContent/BoardContent'
// import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import {
  fetchBoardDetailsAPI, createNewColumnAPI, createNewCardAPI,
  updateBoardDetailsAPI,
  updateColumnDetailsAPI,
  moveCardToDifferentColumnAPI
} from '~/apis'
import { hardBoardId } from '~/utils/constants'

import { generatePlaceholderCard } from '~/utils/formatter'
import { isEmpty } from 'lodash'

import { mapOrder } from '~/utils/sorts'

function Board() {

  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = hardBoardId

    fetchBoardDetailsAPI(boardId).then(board => {

      board.columns.forEach(column => {
        if (isEmpty(column.cards)) {

          column.cards = [generatePlaceholderCard(column)]
          column.cardOrderIds = [generatePlaceholderCard(column)._id]

        } else {
          const orderedColumns = mapOrder(column.cards, column.cardOrderIds, '_id')
          column.cards = orderedColumns
        }


      })

      setBoard(board)
    })
  }, [])

  //goij api tao moi Column va lam lai du lieu  State board
  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })
    createdColumn.cards = [generatePlaceholderCard(createdColumn)]
    createdColumn.cardOrderIds = [generatePlaceholderCard(createdColumn)._id]

    const newBoard = { ...board }
    newBoard.columns.push(createdColumn)
    newBoard.columnOrderIds.push(createdColumn._id)
    setBoard(newBoard)
  }

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })

    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === createdCard.columnId)
    if (columnToUpdate) {
      columnToUpdate.cards.push(createdCard)
      columnToUpdate.cardOrderIds.push(createNewCard._id)
    }
    setBoard(newBoard)
  }

  // goi aoi khi keo tha xong
  const moveColumns = (dndOrderedColumns) => {

    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    updateBoardDetailsAPI(newBoard._id, { columnOrderIds: dndOrderedColumnsIds })
  }

  const moveCardInTheSameColumn = (dndOrderedCards, dndOrderedCardIds, columnId) => {

    const newBoard = { ...board }
    const columnToUpdate = newBoard.columns.find(column => column._id === columnId)
    // console.log('old cooll: ', columnToUpdate)
    if (columnToUpdate) {

      // console.log('b dndOrderedCards: ', dndOrderedCards)
      // console.log('b dndOrderedCardIds: ', dndOrderedCardIds)
      columnToUpdate.cards = dndOrderedCards
      columnToUpdate.cardOrderIds = dndOrderedCardIds

    }
    setBoard(newBoard)

    updateColumnDetailsAPI(columnId, { cardOrderIds: dndOrderedCardIds, cards: dndOrderedCards })
  }

  const moveCardToTheDifferentColumn = (currentCardId, prevColumnId, nextColumnId, dndOrderedColumns) => {

    const dndOrderedColumnsIds = dndOrderedColumns.map(c => c._id)

    const newBoard = { ...board }
    newBoard.columns = dndOrderedColumns
    newBoard.columnOrderIds = dndOrderedColumnsIds
    setBoard(newBoard)

    // goi api
    moveCardToDifferentColumnAPI({
      currentCardId,
      prevColumnId,
      prevCardOrderIds: dndOrderedColumns.find(c => c._id === prevColumnId)?.cardOrderIds,
      nextColumnId,
      nextCardOrderIds: dndOrderedColumns.find(c => c._id === nextColumnId)?.cardOrderIds
    })
  }


  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>

      <AppBar />
      <BoardBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
        moveColumns={moveColumns}
        moveCardInTheSameColumn={moveCardInTheSameColumn}
        moveCardToTheDifferentColumn={moveCardToTheDifferentColumn}
      />
    </Container>
  )
}

export default Board
