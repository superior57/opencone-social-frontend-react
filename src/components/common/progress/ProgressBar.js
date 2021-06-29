import { LinearProgress, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    background: {
        height: '100%',
        width: '100%',
        position: 'fixed',
        zIndex: 9999,
        background: '#FFF',
        opacity: .6
    },
    progress: {
        zIndex: 10000,
        position: "fixed",
        width: '100%'
    }
}))
const ProgressBar = () => {
    const classes = useStyles();
    const { progress } = useSelector(state => state.dialog);
    return <>
    {
        progress && <div className={classes.background} >
            <LinearProgress color="primary" className={classes.progress} />
        </div>
    }
    </>
}

export default ProgressBar;