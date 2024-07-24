
import Box from '@mui/material/Box'
import MyColumn from './MyColumn'
import MyColumn2 from './MyColumn2'
function BoardContent() {

  return (
    <>
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        p: '10px 0'
      }}>
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
          <MyColumn />
          <MyColumn2 />
        </Box>
      </Box>

    </>
  )
}

export default BoardContent
