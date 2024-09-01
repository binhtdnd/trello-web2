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
        <Tooltip title={board?.description}>
          <Chip
            sx={MENU_STYLE}
            icon={<DashboardIcon />}
            label={board?.title}
            clickable
          />
        </Tooltip>

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
              src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/442441572_1835179216990153_2266506822313899534_n.jpg?stp=dst-jpg_s200x200&_nc_cat=106&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeEgvTHdlpGpzT-VW_At8vQXMS5twybZcR8xLm3DJtlxH2ZVS_7nqJPzD5p3Wphx4JC2j_cCo3hwGVVa51mcbUkQ&_nc_ohc=TQq22x-aeMIQ7kNvgEo5yM_&_nc_ht=scontent.fhan15-1.fna&oh=00_AYAKmRnRudHQV9W0SxD73isaKDjylSig8xPq4t66hEz3lg&oe=66D92F24" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/343409017_768366684902685_6367740160593430920_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEkxOiCx1IgEt4_NevgYE-k3Y6nkVOVmcXdjqeRU5WZxbPBOyzTk_0-P7dIMvaokqGxUF-9X5Xv9NNjIZHjXd2F&_nc_ohc=LLhD3ZHdZL4Q7kNvgEIrJQW&_nc_ht=scontent.fhan15-2.fna&oh=00_AYBx9280fw6zddothLUUYVubuHKqErr1CDALEjfk1Y9GoQ&oe=66D93645" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/277780829_1339357219905691_6321030476919936347_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG1y-x4rimogszw6Oy4jRB-exylV9CHdzt7HKVX0Id3O5wmM_peiVPRg_MzArPPClorO57TZveHF4X9ylNGA-as&_nc_ohc=ECS7DQUGVvwQ7kNvgEgZXxj&_nc_ht=scontent.fhan15-1.fna&oh=00_AYAHoLKQenvWV5iw4VIJo_DFgPj4_sN4PniM_QR9In0dJA&oe=66D92051" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/274826776_1314859639022116_8399250899680068694_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGiiRr_jPuNH7tLTss5PRr0Aud-9wr_YiYC5373Cv9iJh12_5icneqxDA182fYorV_BF8VZLJYmOKurniBOB3kE&_nc_ohc=TMKNlTgI65sQ7kNvgE-l2Ox&_nc_ht=scontent.fhan15-2.fna&oh=00_AYCEsWRIhnYpuVbXva5Jxlq7aPhcwyyqI_sFbbv13FoXag&oe=66D92244" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/240525881_1216129308895150_86424308604096502_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEi2h18JDguKPImCUgA4PsRDwp82LBiimgPCnzYsGKKaN4F8bPkqH4oQlrtVonXr4fACPYyMDQiKiEcdBeTHMC0&_nc_ohc=eSXdLJDIntIQ7kNvgFqOAVA&_nc_ht=scontent.fhan15-2.fna&oh=00_AYDZ67HP_7uzOCncxGZERftZH1GwvdNrvGd5_LkSPQdbBA&oe=66D927E1" />

          </Tooltip>

          <Tooltip title="title">
            <Avatar
              alt="alt"
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t1.6435-9/148512478_1073940676447348_2795087433289237675_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeH80yJ3n0s7rWZkgdlsWjHQUBceYx2crM5QFx5jHZyszhgqcbufdfrewA28Ix9JFKSf85XrwDA2iz_OWHKs6-AL&_nc_ohc=jbseJ5e7evcQ7kNvgEzbUF8&_nc_ht=scontent.fhan15-2.fna&oh=00_AYBHOY_e6r0kjLiOnu6bh_bS1c_deja4UUskNH79ZUudOg&oe=66FADCCB" />

          </Tooltip>
        </AvatarGroup>
      </Box>

    </Box>
  )
}

export default BoardBar
