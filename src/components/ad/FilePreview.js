import { Fab, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Delete } from "@material-ui/icons";
import VideoThumbnail from 'react-video-thumbnail'; 
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    content: {
        '& img': {
            width: '100%',
            height: '100%',
            maxWidth: 200,
            zIndex: 1
        }
    }
}))
const FilePreview = ({
    file = {},
    onDelete
}) => {
    const classes = useStyles();

    return <Grid container style={{ width: '100%' }}>
        <Grid item xs={12} className="d-flex justify-content-end" style={{ marginBottom: -25, marginRight: -10 }}>
            <Fab 
                color="default" 
                aria-label="" 
                size="small" 
                style={{
                    zIndex: 2
                }}
                onClick={ev => {
                    onDelete();
                }}
            >
                <Delete />
            </Fab>
        </Grid>
        <Grid item xs={12} className={clsx("p-3 text-center", classes.content)}>
            {
                file.type.includes('image') ? <img src={URL.createObjectURL(file)} alt="preview"/> :
                <VideoThumbnail videoUrl={URL.createObjectURL(file)} />
            }
            
        </Grid>        
    </Grid>
}
export default FilePreview;