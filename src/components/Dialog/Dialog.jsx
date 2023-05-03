import React from 'react'
import useStyles from './styles';
import { Dialog as MuiDialog,DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Typography } from '@mui/material';
const Dialog = (props) => {
    const classes=useStyles();
    const { open, onClose, title, text, image, video,buttonOne,buttonTwo } = props;
  return (
      <MuiDialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
          <DialogContent>
              {image && <img src={image} alt="dialog-image" />}
              {video && <video src={video} controls />}
              <DialogContentText variant='body1'>
                {text}
              </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose} variant='text'>{buttonOne}</Button>
            <Button onClick={onClose} variant='contained'>{buttonTwo}</Button>

          </DialogActions>
      </MuiDialog>
  )
}
export default Dialog

