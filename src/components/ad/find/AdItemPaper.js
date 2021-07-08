import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { Phone, Forum, FavoriteBorder } from '@material-ui/icons';
import clsx from 'clsx';
import { colors } from '../../../utils/fieldTypes';
import BadgeAvatar from '../../common/BadgeAvatar';
import AdOutlineButton from '../../common/button/AdOutlineButton';
import { useHistory } from "react-router-dom";
import { getFileType } from '../../../utils/functions';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../store/actions/chatActions';

const useStyles = makeStyles(theme => ({
    root: {
        '&:hover': {
            cursor: 'pointer',
            borderColor: theme.palette.primary.main,
            boxShadow: theme.shadows[2]
        },
        '&:hover .ad-details': {
            backgroundColor: blue[50]
        }
    },
}))

const AdItemPaper = ({
    data = {}
}) => {
    const classes = useStyles();
    const { specs, user } = data;
    const { avatar, gender } = user;
    const history = useHistory();
    const dispatch = useDispatch(null);
    const { contacts } = useSelector(state => state.chat);
    const auth = useSelector(state => state.auth);
    var arrSpec = [],
        tempSpec = []

    if (specs) {
        Object.values(specs).forEach(spec => {
            if (tempSpec.length === 3) {
                arrSpec.push(tempSpec.join("  |  "));            
                tempSpec = [];
                if (spec !== "" && !colors.find(c => c.value === spec)) 
                    tempSpec.push(spec);
            } else{
                if (spec !== "" && !colors.find(c => c.value === spec)) 
                    tempSpec.push(spec);
            }
        });
    }
    tempSpec.unshift(data.sub_category.name);
    arrSpec.push(tempSpec.join(" | "));      

    const handleClickChatButton = ev => {
        if (!contacts.find(contact => contact.receiver._id === user._id) && user._id !== auth.user.id) {
            dispatch(addContact(user._id, history));
        } else {
            history.push('/chat');
        }
    }
    
    return <Paper square elevation={0} variant="outlined" className={clsx("p-2", classes.root)}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={5} md={4} lg={3} onClick={() => history.push("/ads/" + data._id)}>
                     {
                         getFileType(data.images[0]) === "image" ? <img src={data.images[0]} width="100%" height="100%" alt="ad" style={{ maxHeight: 300 }} /> :
                         <video src={data.images[0]} width="100%" height="100%" alt="ad" autoPlay muted style={{ maxHeight: 300 }} />   
                     }
                </Grid>
                <Grid item xs={12} sm={7} md={8} lg={9} className="d-flex flex-column justify-content-between ad-details">
                    <Grid container spacing={1} className="mb-2 h-100">
                        <Grid item md={8}>
                            <Typography variant="h6" color="primary" className="mb-3">{data.title}</Typography>
                            {
                                arrSpec.map(spec => <Typography key={spec} color="initial" className="mb-2">{spec}</Typography>)
                            }
                        </Grid>          
                        <Grid item md={4} className="w-100 d-flex flex-md-column align-items-end justify-content-between">
                            <Typography variant="h6" className="text-danger">{data.price || 0} {data.currency || 'JOD'}</Typography>
                            <BadgeAvatar src={avatar} gender={gender} />
                        </Grid>        
                    </Grid>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <AdOutlineButton fullWidth disabled={user._id === auth.user.id}>
                                <FavoriteBorder color="disabled" /> &nbsp; Add
                            </AdOutlineButton>
                        </Grid>     
                        <Grid item xs={4}>
                            <AdOutlineButton fullWidth disabled={user._id === auth.user.id}>
                                <Phone  color={user._id === auth.user.id ? "disabled" : "primary"} /> &nbsp; Call
                            </AdOutlineButton>
                        </Grid>  
                        <Grid item xs={4}>
                            <AdOutlineButton fullWidth onClick={handleClickChatButton} disabled={user._id === auth.user.id}>
                                <Forum color={user._id === auth.user.id ? "disabled" : "primary"} /> &nbsp; Chat
                            </AdOutlineButton>
                        </Grid>               
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
}
export default AdItemPaper;