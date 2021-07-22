import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser} from "../../../store/actions/authActions";
import BadgeAvatar from "../../common/BadgeAvatar";
import { 
    Grid, Table, TableHead, TableBody, TableContainer, TableRow, TableCell, Paper, IconButton, Fab, 
    Button, Dialog, DialogContent, DialogTitle, TextField, useTheme, useMediaQuery, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@material-ui/core';
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon, Close as CloseIcon, RemoveRedEye as ViewIcon } from "@material-ui/icons";
import { useForm } from "react-hook-form";
import { CLEAR_ERRORS } from "../../../store/actions/types";
import { useHistory } from "react-router-dom";
import { getAds, updateAd } from "../../../store/actions/adActions";
import { getFileType, isEmpty } from "../../../utils/functions";
import { getCategories } from "../../../store/actions/categoryActions";
import { red, yellow } from "@material-ui/core/colors";
import { roles } from "../../../utils/roles";

const columns = [
    {
        field: 'title',
        title: "Title",
    },
    {
        field: 'description',
        title: "Description",
    },
    {
        field: 'user',
        title: "Poster",
        render: (user) => {
            return <BadgeAvatar src={user.avatar} gender={user.gender} size="small" showBadge={false} />
        },
    },
    {
        field: 'category',
        title: "Category",
        render: (category) => category.name
    },
    {
        field: 'sub_category',
        title: "Sub Category",
        render: (category) => category.name
    },
    {
        field: "order",
        title: "Boost",
        render: (value) => value === 1 ? "Boosted" : "Normal"
    },
    {
        field: "is_blocked",
        title: "Status",
        render: (value) => value === 1 ? "Blocked" : "Active"
    }
]

const AdManagement = () => {
    const { ads: originAds } = useSelector(state => state.ad);
    const auth = useSelector(state => state.auth);
    const [ads, setAds] = useState([]);
    const errors = useSelector(state => state.errors);
    const dispatch = useDispatch(null);
    const [open, setOpen] = useState(false);
    const [adding, setAdding] = useState(false)
    const { handleSubmit } = useForm();
    const initialData = {
        title: "",
        description: "",
        contact_email: "",
        contact_name: "",
        is_blocked: 0
    }
    
    const [data, setData] = useState(initialData);
    const theme = useTheme();
    const isWidthDownSm = useMediaQuery(theme.breakpoints.down('sm'));
    const history = useHistory();

    useEffect(() => {
        dispatch(getUser(auth.user.id));
    }, [auth.user.id])

    useEffect(() => {     
        if (auth.user.role === roles.admin) {
            setAds([
                ...originAds.filter(ad => ad.order === 1),
                ...originAds.filter(ad => ad.order !== 1)
            ])
        }
    }, [originAds])
    useEffect(() => {
        if (auth.user.role !== roles.admin && !isEmpty(auth.tempUser)) {
            setAds([
                ...auth.tempUser.ads?.filter(ad => ad.order === 1),
                ...auth.tempUser.ads?.filter(ad => ad.order !== 1)
            ])
        }
    }, [auth])
    useEffect(() => {
        dispatch(getAds());
        dispatch(getCategories());
    }, [])
    useEffect(() => {
        dispatch({
            type: CLEAR_ERRORS
        })
    }, [open])

    const handleSave = () => {
        const formData = {};
        Object.keys(initialData).forEach(key => {
            formData[key] = data[key];
        });
        dispatch(updateAd(data._id, formData));
        setOpen(false);
        if (auth.user.role !== roles.admin) {
            setAds([
                ...ads.map(ad => ad._id === data._id ? data : ad)            
            ])
        }
    }
    
    const handleAdd = () => {
        setData(initialData);
        setAdding(true);
        setOpen(true);
    }

    const handleEdit = (ad) => {
        setData({
            ...data,
            ...ad
        });
        setAdding(false);
        setOpen(true);
    }
    
    const handleBoost = () => {
        const formData = {
            order: 1,
            boost: true
        };
        dispatch(updateAd(data._id, formData));
        setOpen(false);
        if (auth.user.role !== roles.admin) {
            setAds([
                ...ads.map(ad => ad._id === data._id ? data : ad)            
            ])
        }
    }

    const deleteAd = () => {
        
    }


    return <Grid container spacing={1} className="h-100">
        <Grid item xs={12} className="h-100">
            <TableContainer component={Paper} elevation={0} square variant="outlined" className="h-100">
                
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            {
                                columns.map((col, index) => <TableCell key={"usertable-header-item" + index}>
                                    {
                                        col.title
                                    }
                                </TableCell>)
                            }   
                            <TableCell>         
                                <div className="d-flex justify-content-end">
                                    <Fab color="default" aria-label="" size="medium" 
                                        style={{
                                            marginBottom: '-45px'
                                        }}
                                        onClick={handleAdd}
                                    >
                                        <AddIcon />
                                    </Fab>                   
                                </div>
                            </TableCell>     
                        </TableRow>     
                    </TableHead>
                    <TableBody>
                        {
                            ads.map((ad, row_i) => <TableRow key={"adtable-body-row-" + row_i} style={{ backgroundColor: ad['is_blocked'] == 1 ? red['50'] : (ad['order'] === 1 ? yellow[50] : '') }}>
                                {
                                    columns.map((col, c_i) => <TableCell key={"usertabel-body-col-" + c_i}>
                                        {
                                            col.render ? 
                                                (col.render(ad[col.field])) : 
                                                ad[col.field]
                                        }
                                    </TableCell>)
                                }
                                <TableCell>
                                    <div className="d-flex justify-content-end">
                                        <IconButton aria-label="" onClick={() => history.push('/ads/' + ad._id)} size="small">
                                            <ViewIcon />
                                        </IconButton>   
                                        <IconButton aria-label="" onClick={() => handleEdit(ad)} size="small">
                                            <EditIcon />
                                        </IconButton>        
                                        <IconButton aria-label="" onClick={() => {
                                            dispatch(deleteAd(ad._id));
                                        }} size="small">
                                            <DeleteIcon />
                                        </IconButton>     
                                    </div>                  
                                </TableCell>
                            </TableRow>)
                        }                        
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>   
        <Dialog open={open} onClose={() => setOpen(false)} aria-labelledby="" fullWidth fullScreen={isWidthDownSm}>
          <DialogTitle>
            <div className="d-flex justify-content-between">
                <div>
                    {
                        adding ? "Add new user" : "Edit AD: " + data.title
                    }
                </div>
                <div>
                    <IconButton aria-label="" onClick={() => setOpen(false)} >
                        <CloseIcon />
                    </IconButton>
                </div>
            </div>            
          </DialogTitle>
          <DialogContent className="py-3">
            <form onSubmit={handleSubmit(handleSave)}>
                {/* <Select native fullWidth className="mb-3" variant="outlined" value={data.category?._id} onChange={ev => setData({...data, role: ev.target.value})}>
                    {
                        categories.map((category, index) => <option key={"category-item-" + index} value={category._id}>{category.name}</option>)
                    }
                </Select> */}
                <TextField            
                    label="Title"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    value={data.title}
                    onChange={ev => setData({...data, title: ev.target.value})}
                    required
                    error={!!errors.title}
                    helperText={errors.title}
                />
                <TextField            
                    label="Description"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    value={data.description}
                    onChange={ev => setData({...data, description: ev.target.value})}
                    required
                    error={!!errors.description}
                    helperText={errors.description}
                    multiline
                />
                <Grid container spacing={3} className="w-100 mb-3">
                    {
                        data.images?.map((img, index) => <Grid key={'ad-img-item-' + index} item xs={3} md={3}>
                            {
                                getFileType(img) === "video" ? <video src={img} width="100" height="100" alt="" /> : <img src={img} width="100" height="100" alt="" />
                            }
                        </Grid> )
                    }                     
                </Grid>
                <TextField                
                    label="Contact Name"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="text"
                    value={data.contact_name}
                    onChange={ev => setData({...data, contact_name: ev.target.value})}
                    required
                    error={!!errors.contact_name}
                    helperText={errors.contact_name}
                />
                <TextField                
                    label="Contact Email"
                    variant="outlined"
                    fullWidth
                    className="mb-3"
                    type="email"
                    value={data.contact_email}
                    onChange={ev => setData({...data, contact_email: ev.target.value})}
                    required
                    error={!!errors.contact_email}
                    helperText={errors.contact_email}
                />
                <FormControl component="fieldset" className="mb-2">
                    <FormLabel component="legend">AD status</FormLabel>
                    <RadioGroup aria-label="" name="" value={data.is_blocked || '0'} onChange={ev => setData({...data, is_blocked: ev.target.value})} className="flex-row">
                        <FormControlLabel value="0" label="Active" labelPlacement="end" control={<Radio checked={data.is_blocked == 0} />} />                        
                        <FormControlLabel value="1" label="Block" labelPlacement="end" control={<Radio checked={data.is_blocked == 1} style={{ color: red[500] }} />} style={{ color: red[500] }} />                        
                    </RadioGroup>
                </FormControl>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" type="button" fullWidth style={{ backgroundColor: red[500], color: 'white' }} onClick={handleBoost}>
                            Boost &nbsp;&nbsp; { auth.user.role !== roles.admin && auth.user.boost_credits }                  
                        </Button>
                    </Grid>     
                    <Grid item xs={12} md={6}>
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Save                  
                        </Button>
                    </Grid>
                </Grid>
            </form>
          </DialogContent>
        </Dialog>   
    </Grid>
}
export default AdManagement;