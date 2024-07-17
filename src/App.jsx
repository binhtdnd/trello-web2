import Button from '@mui/material/Button';

import  Typography  from '@mui/material/Typography';

import {
  useColorScheme,
} from '@mui/material/styles';


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
