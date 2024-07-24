import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { useState } from 'react'

import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Tooltip from '@mui/material/Tooltip'
import AddcardIcon from '@mui/icons-material/Addcard'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Cloud from '@mui/icons-material/Cloud'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ContentPaste from '@mui/icons-material/ContentPaste'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import MyCard from './MyCard'

function MyColumn() {
  const COLUMN_HEADER_HEIGHT = '58px'
  const COLUMN_FOOTER_HEIGHT = '60px'
  // const COLUMN_CONTENT_HEIGHT = (theme) => theme.trello.boardContentHeight
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => { setAnchorEl(event.currentTarget) }
  const handleClose = () => { setAnchorEl(null) }
  return (
    <Box
      sx={{
        minWidth: '300px',
        maxWidth: '300px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: '6px',
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`

      }}
    >
      {/* Box top */}
      <Box
        sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h6'
          sx={{
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >Column title</Typography>
        <Box>
          <Tooltip title='More Option'>
            <ExpandMoreIcon
              sx={{ color: 'text.primary', cursor: 'pointer' }}
              id="basic-column-dropdown"
              aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            />
          </Tooltip>
          <Menu
            id="basic-menu-column-dropdown"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >

            <MenuItem>
              <ListItemIcon><AddcardIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Add New Card</ListItemText>
            </MenuItem>

            <MenuItem>
              <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
              <ListItemText>Cut</ListItemText>
              <Typography variant="body2" color="text.secondary">
                Ctrl + X
              </Typography>
            </MenuItem>

            <MenuItem>
              <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
              <ListItemText>Copy</ListItemText>
              <Typography variant="body2" color="text.secondary">
                Ctrl + C
              </Typography>
            </MenuItem>

            <MenuItem>
              <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
              <ListItemText>Paste</ListItemText>
              <Typography variant="body2" color="text.secondary">
                Ctrl + V
              </Typography>
            </MenuItem>


            <Divider />
            <MenuItem>
              <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
              <ListItemText>Remove Column</ListItemText>
            </MenuItem>
            <MenuItem>
              <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
              <ListItemText>Save</ListItemText>
            </MenuItem>
          </Menu>

        </Box>

      </Box>

      {/* Mid  */}
      <Box
        sx={{
          p: '0 5px',
          m: '0 5px',

          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: (theme) => `calc(
              ${theme.trello.boardContentHeight} - 
              ${theme.spacing(5)} - ${COLUMN_HEADER_HEIGHT} - 
              ${theme.spacing(5)} - ${COLUMN_FOOTER_HEIGHT}
            )`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'green.2'
          }
        }}
      >
        <Card sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset'
        }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSWhkuVCo1_0UpZ7-BfDTbTNB9Nx-3FoQprHTX48rdN2AYryK_zS2YZ6qxmlJFarvcZjZqXnKhrBe2aTKnSQm2jH2gSVI8b1V75dhbrjg"
            title="green iguana"
          />
          <CardContent sx={{ p: 1.5, '&:last-children': { p: 1.5 } }}>
            <Typography >
              Labrador
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion
            </Typography>
          </CardContent>
          {/* now */}
          <CardActions sx={{ p: '0 4px 8px 4px' }}>
            <Button size="small" startIcon={<GroupIcon />}>20</Button>
            <Button size="small" startIcon={<CommentIcon />}>78</Button>
            <Button size="small" startIcon={<AttachmentIcon />}>1253</Button>
          </CardActions>
        </Card>

        <Card sx={{
          cursor: 'pointer',
          boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
          overflow: 'unset'
        }}
        >
          <CardMedia
            sx={{ height: 140 }}
            image="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
            title="green iguana"
          />
          <CardContent sx={{ p: 1.5, '&:last-children': { p: 1.5 } }}>
            <Typography >
              Deutscher Schäferhund
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          {/* now */}
          <CardActions sx={{ p: '0 4px 8px 4px' }}>
            <Button size="small" startIcon={<GroupIcon />}>20</Button>
            <Button size="small" startIcon={<CommentIcon />}>78</Button>
            <Button size="small" startIcon={<AttachmentIcon />}>1253</Button>
          </CardActions>
        </Card>

        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>
        <MyCard></MyCard>

      </Box>

      {/* Footer */}
      <Box
        sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button startIcon={<AddcardIcon />}>
          Add new card
        </Button>

        <Tooltip title='Drap to move'>
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>

    </Box>
  )
}

export default MyColumn