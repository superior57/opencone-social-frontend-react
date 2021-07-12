import React, { useState } from 'react';
import { Paper, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField } from "@material-ui/core";
import { Close } from '@material-ui/icons';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addComment } from '../../store/actions/adActions';

const Comments = ({
    adId = "",
    data = []
}) => {
    const [open, setOpen] = useState(false);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch(null);

    console.log("123", data);

    const saveComment = (data) => {
        dispatch(addComment(adId, data));
        setOpen(false);
    }
    return (
        <Paper variant="outlined" square className="p-4 h-100 w-100">
            <Grid container spacing={1} justify="space-between" className="mb-3">
                <Grid item>
                    <Typography variant="h6" color="initial" className="text-black-50">
                        Comments
                    </Typography>                    
                </Grid>
                <Grid item>
                    <Button variant="contained" color="primary" className="float-end" onClick={() => setOpen(true)}>
                        Submit a Comment
                    </Button>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {
                    data.map(({message, user}, index) => <Grid key={'comment-item-' + index} item xs={12}>
                        <Typography variant="subtitle2" color="primary" className="py-2">{user?.name}</Typography>
                        <Typography variant="inherit" color="initial" className="py-2">{message}</Typography>
                    </Grid>)
                }              
            </Grid>
            <Dialog open={open} aria-labelledby="" fullWidth>
              <DialogTitle id="">
                  <div className="d-flex justify-content-between">
                    <Typography variant="subtitle1" color="initial">Comments</Typography>
                    <IconButton aria-label="" onClick={() => setOpen(false)} size="small">
                        <Close />                    
                    </IconButton>
                  </div>
              </DialogTitle>
              <DialogContent>
                  <form onSubmit={handleSubmit(saveComment)}>
                        <TextField
                                {...register('message')}
                                fullWidth
                                variant="outlined"
                                // label="Comment"
                                placeholder="Type your comments here"
                                multiline
                                rows={3}        
                                required     
                                className="mb-3"           
                        />
                        <Button className="float-end" variant="contained" color="primary" type="submit">
                            Submit                    
                        </Button>
                  </form>
              </DialogContent>
            </Dialog>
        </Paper>
    )
}

export default Comments;