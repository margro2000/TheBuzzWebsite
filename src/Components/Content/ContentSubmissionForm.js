import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import Grid from '@mui/material/Grid';
import DropdownMenu from './DropdownMenu';

const ContentSubmissionForm = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Submit Content
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Submit Content</DialogTitle>
        <DialogContent>
          <TextField 
            label="Title" 
            variant="outlined" 
            size="small" 
            margin="normal" 
            fullWidth 
            required/>
          <TextField 
            label="Description" 
            variant="outlined" 
            size="small"
            margin="normal" 
            fullWidth 
            multiline 
            rows={4} 
            required/>
          <DropdownMenu/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ContentSubmissionForm
