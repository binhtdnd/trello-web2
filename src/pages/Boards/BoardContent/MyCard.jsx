import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function MyCard() {
  return (
    <Card sx={{
      cursor: 'pointer',
      boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
      overflow: 'unset'
    }}
    >

      <CardContent sx={{ p: 1, '&:last-children': { p: 1 } }}>
        <Typography >
          Lizard widespread
        </Typography>

      </CardContent>

    </Card>
  )
}

export default MyCard