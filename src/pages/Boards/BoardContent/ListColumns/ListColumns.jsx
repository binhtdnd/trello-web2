
import Box from '@mui/material/Box'
import Column from './ListColumn/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { useState } from 'react'

import TextField from '@mui/material/TextField'
import CloseIcon from '@mui/icons-material/Close'

import { toast } from 'react-toastify'

function ListColumns({ columns, createNewColumn, createNewCard, deleteColumnDetails }) {
  const [openNewColumnForm, setOpenNewColumnForm] = useState(false)
  const toggleOpenNewColumnForm = () => setOpenNewColumnForm(!openNewColumnForm)
  const [newColumntitle, setNewColumntitle] = useState('')

  const addNewColumn = () => {
    if (!newColumntitle) {
      toast.error('Please enter Column title')
      return
    }

    const newColumnData = {
      title: newColumntitle
    }
    createNewColumn(newColumnData)


    toggleOpenNewColumnForm()
    setNewColumntitle('')
  }

  const closeFormAddNewBoard = () => {
    setNewColumntitle('')
    toggleOpenNewColumnForm()
  }
  return (
    <>
      {/* horizontal: TOi' uu trong keo tha chieu ngang */}
      <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
        <Box sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': {
            m: 2
          }
        }}
        >
          {columns?.map(column => <Column key={column._id} column={column} createNewCard={createNewCard}
            deleteColumnDetails={deleteColumnDetails}
          />)}


          {/* add new Column */}
          {!openNewColumnForm
            ? <Box
              onClick={toggleOpenNewColumnForm}
              sx={{
                minWidth: '250px',
                maxWidth: '250px',
                mx: 2,
                borderRadius: '6px',
                height: 'fit-content',
                bgcolor: '#ffffff3d'

              }}>
              <Button
                startIcon={<NoteAddIcon />}
                sx={{
                  color: 'white',
                  witdh: '100%',
                  justifyContent: 'flex-start',
                  pl: 3,
                  py: 1
                }}
              >
                Add new Column
              </Button>
            </Box>
            : <Box sx={{
              minWidth: '250px',
              maxWidth: '250px',
              mx: 2,
              p: 1,
              borderRadius: '6px',
              height: 'fit-content',
              bgcolor: '#ffffff3d',
              display: 'flex',
              flexDirection: 'column',
              gap: 1
            }}>
              <TextField
                label="Enter column title"
                type="text"
                size='small'
                variant='outlined'
                autoFocus
                value={newColumntitle}
                onChange={(e) => setNewColumntitle(e.target.value)}

                sx={{

                  '& label': { color: 'white' },
                  '& input': { color: 'white' },
                  '& label.Mui-focused': { color: 'white' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '&.Mui-focused fieldset': { borderColor: 'white' }
                  }
                }}
              />

              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button
                  onClick={addNewColumn}
                  variant='contained' color='success' size='small'
                  sx={{
                    boxShadow: 'none',
                    border: '0.5px solid',
                    borderColor: (theme) => theme.palette.success.main,
                    '&:hover': { bgcolor: (theme) => theme.palette.success.light }
                  }}
                >Add column</Button>
                <CloseIcon
                  fontSize='small'
                  sx={{
                    color: 'white',
                    cursor: 'pointer',
                    '&:hover': { color: (theme) => theme.palette.warning.light }
                  }}
                  onClick={closeFormAddNewBoard}

                />

              </Box>
            </Box>
          }

        </Box>
      </SortableContext>
    </>
  )
}

export default ListColumns