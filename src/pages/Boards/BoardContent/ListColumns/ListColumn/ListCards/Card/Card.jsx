import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'
import Typography from '@mui/material/Typography'
import { Card as MuiCard } from '@mui/material'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import theme from '~/theme'
function Card({ card }) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card }
  })

  const dndKitCardStyles = {
    touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : undefined,
    border: isDragging ? '1px solid #2ecc71' : undefined
  }

  const shouldShowCardAction = () => {
    return !!card?.memberIds?.length || !!card?.comments?.length || !!card?.attachments?.length
  }
  return (

    <MuiCard
      ref={setNodeRef} style={dndKitCardStyles} {...attributes} {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
        opacity: card?.FE_PlaceholderCard ? '0' : '1',
        height: card?.FE_PlaceholderCard ? '0px' : 'unset',
        // display: card?.FE_PlaceholderCard ? 'none' : 'block',

        border: '1px solid transparent',
        pointerEvents: card?.FE_PlaceholderCard ? 'none' : 'initial',
        '&:hover': { borderColor: (theme) => theme.palette.primary.main }
      }}
    >
      {card?.cover &&
        <CardMedia
          sx={{ height: 140 }}
          image={card?.cover}
        />
      }

      <CardContent sx={{ p: 1.5, '&:last-children': { p: 1.5 } }}>
        <Typography >
          {card?.title}
        </Typography>
      </CardContent>
      {
        shouldShowCardAction() &&
        <CardActions sx={{ p: '0 4px 8px 4px' }}>
          {!!card?.memberIds?.length &&
            <Button size="small" startIcon={<GroupIcon />}>{card.memberIds.length}</Button>
          }

          {!!card?.comments?.length &&
            <Button size="small" startIcon={<CommentIcon />}>{card.comments.length}</Button>
          }

          {!!card?.attachments?.length &&
            <Button size="small" startIcon={<AttachmentIcon />}>{card.attachments.length}</Button>
          }
        </CardActions>
      }

    </MuiCard >
  )
}

export default Card