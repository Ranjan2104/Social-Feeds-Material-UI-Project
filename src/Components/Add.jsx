import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Fab, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const Add = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };  
  return (
    <>
        <Tooltip title="Add Posts" sx={{ position: 'fixed', bottom: 20, left: 30 }}>
        <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
            <AddIcon />
        </Fab>
        </Tooltip>

        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" sx={{ color: 'grey', textAlignLast: 'center' }}>
          {"Creat Post"}
        </DialogTitle>
        <DialogContent sx={{ overflow: 'hidden' }}>
          <DialogContentText id="alert-dialog-description" sx={{ display: 'flex', gap: '30px' }}>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            <Typography variant='h6' fontWeight={600} sx={{ color: 'text.primary' }}>Amresh Mallick</Typography>
          </DialogContentText>
          <DialogContentText sx={{ marginTop: '15px' }}>
          <TextField id="standard-basic" label="What on Your Mind?" variant="standard" sx={{ width: '500px' }}/>
          </DialogContentText>
          <DialogContentText sx={{ display: 'flex', gap: '10px', marginTop:'25px' }}>
            <EmojiEmotionsIcon color='primary'/>
            <CollectionsIcon color='error'/>
            <VideoCameraFrontIcon color='success'/>
            <PersonAddIcon color='secondary'/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} autoFocus>
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Add
