import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterIcon from '@mui/icons-material/Filter'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  padding: '5px',
  boderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {

  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      overflow: 'auto',
      px: 1,
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      '&::-webkit-scrollbar-track': {
        m: 2
      }
    }}>

      <Box sx={{
        display: 'flex', alignItems: 'center', gap: 1
      }}>
        <Chip
          sx={MENU_STYLE}
          icon={<DashboardIcon />}
          label={board?.title}
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<VpnLockIcon />}
          label={capitalizeFirstLetter(board?.type)}
          clickable
        />

        <Chip
          sx={MENU_STYLE}
          icon={<AddToDriveIcon />}
          label='Add to Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<BoltIcon />}
          label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLE}
          icon={<FilterIcon />}
          label='Filter'
          clickable
        />
      </Box>

      {/* box right */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>
        <AvatarGroup
          max={4}
          sx={{
            gap: '10px',

            // children of avatar group
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              boder: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-1/400678933_709939517853409_4907397752584154593_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGnpJLrfBs0qZmc1hOD1TdrgwsXLQMgOj2DCxctAyA6PTDoEpkr9c8Kps7CD9xHWK0TmdCa2oCX_Uwl8J--9eaa&_nc_ohc=QHE9oOpMTz8Q7kNvgFRmhN0&_nc_ht=scontent.fhan5-5.fna&oh=00_AYDOj8HEdssXfwP89X5ngaK6RkqcT6IFy3CDMS8OWfhnVQ&oe=66A68478" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/451260610_851998233647536_4783788256266855603_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3ZR8wiiFp1HjyrORp27uE_qVhn7yEG9L-pWGfvIQb0mrVDI2qKNGySUw3Rmq4zwTCABpTam3BcgRl_CHADxnQ&_nc_ohc=wT2Z4WSvNskQ7kNvgFHwo4d&_nc_ht=scontent.fhan5-3.fna&oh=00_AYCCZw18R3mhX8gCH-WASC7xcHeBX7omhoT4dZ-UjslC4g&oe=66A68DBA" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/450715607_851998283647531_4692676379233188111_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmXCLG63m9fqByFr79vsSmvviZLPhi3Ka--Jks-GLcpuwPJty3Y_37tAVJDHQh2u4SpP0I0rHsvb297HfMc7lw&_nc_ohc=nFEWvfDmRsAQ7kNvgESv8VU&_nc_ht=scontent.fhan5-3.fna&oh=00_AYAJeGEj24X5L1nXZIIO-Y52P3woT38_JySBD8gnpwXGjg&oe=66A6A82E" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-1/400678933_709939517853409_4907397752584154593_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=f4b9fd&_nc_eui2=AeGnpJLrfBs0qZmc1hOD1TdrgwsXLQMgOj2DCxctAyA6PTDoEpkr9c8Kps7CD9xHWK0TmdCa2oCX_Uwl8J--9eaa&_nc_ohc=QHE9oOpMTz8Q7kNvgFRmhN0&_nc_ht=scontent.fhan5-5.fna&oh=00_AYDOj8HEdssXfwP89X5ngaK6RkqcT6IFy3CDMS8OWfhnVQ&oe=66A68478" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/451260610_851998233647536_4783788256266855603_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE3ZR8wiiFp1HjyrORp27uE_qVhn7yEG9L-pWGfvIQb0mrVDI2qKNGySUw3Rmq4zwTCABpTam3BcgRl_CHADxnQ&_nc_ohc=wT2Z4WSvNskQ7kNvgFHwo4d&_nc_ht=scontent.fhan5-3.fna&oh=00_AYCCZw18R3mhX8gCH-WASC7xcHeBX7omhoT4dZ-UjslC4g&oe=66A68DBA" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/450715607_851998283647531_4692676379233188111_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHmXCLG63m9fqByFr79vsSmvviZLPhi3Ka--Jks-GLcpuwPJty3Y_37tAVJDHQh2u4SpP0I0rHsvb297HfMc7lw&_nc_ohc=nFEWvfDmRsAQ7kNvgESv8VU&_nc_ht=scontent.fhan5-3.fna&oh=00_AYAJeGEj24X5L1nXZIIO-Y52P3woT38_JySBD8gnpwXGjg&oe=66A6A82E" />

          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
