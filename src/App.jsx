import Button from '@mui/material/Button'

import  Typography  from '@mui/material/Typography'

import {
  useColorScheme
} from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import LightModeIcon from '@mui/icons-material/LightMode'
import  DarkModeOutLinedIcon  from '@mui/icons-material/DarkModeOutlined'
import  SettingsBrightnessIcon  from '@mui/icons-material/SettingsBrightness'

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode);
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="label-select-dark-light-mode"
        value={mode}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
          <LightModeIcon fontSize='small'/>  Light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{display:'flex',alignItems:'center',gap:'8px'}}>
            <DarkModeOutLinedIcon />  Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
        <div style={{display:'flex',alignItems:'center' ,gap:1}}>
          <SettingsBrightnessIcon fontSize='small'/>  System
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

function App() {
  return (
    <>
    <ModeSelect/>
    <hr></hr>
    <ModeToggle/>
    <hr></hr>
    <div>BINH text containt outline</div>
      <Typography variant='body2' color="text.secondary">asssssssssaaa</Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </>
  )
}

export default App
