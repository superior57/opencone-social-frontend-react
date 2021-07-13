import { Grid, FormControl, TextField, Typography, Select, MenuItem, FormHelperText, FormLabel } from '@material-ui/core';
import AdItemPaper from '../../components/ad/find/AdItemPaper';
import { useDispatch, useSelector } from "react-redux";
import Field from '../../components/ad/Field';
import { useEffect, useState } from 'react';
import { SET_SEARCH } from '../../store/actions/types';
import { getAds } from '../../store/actions/adActions';
import ProgressCircle from '../../components/common/progress/ProgressCircle';
import { isEmpty, shuffleArray } from '../../utils/functions';
import { sortMethods } from '../../utils/fieldTypes';


const AdFindPage = () => {
    const { subCategory } = useSelector(state => state.subCategory);
    const { category } = useSelector(state => state.category);
    const { city } = useSelector(state => state.city);
    const { progress } = useSelector(state => state.dialog);
    const { ads, ad } = useSelector(state => state.ad);
    const [state, setState] = useState({});
    const [specs, setSpecs] = useState({});
    const [randomAds, setRandomAds] = useState([])
    const [sortMethod, setSortMethod] = useState("");
    const dispatch = useDispatch(null);
    const [isFirstLoading, setIsFirstLoading] = useState(true);

    
    useEffect(() => {
        if (!isEmpty(ads)) {
            if (isFirstLoading) {
                let shufflyAds = [];
                shufflyAds = shuffleArray(ads);
                shufflyAds = [
                    ...shufflyAds.filter(ad => ad.order === 1),
                    ...shufflyAds.filter(ad => ad.order !== 1)
                ]
                setRandomAds([
                    ...shufflyAds.filter(ad => ad.is_blocked != 1)
                ]);
                setIsFirstLoading(false);
            } else {
                setRandomAds([
                    ...randomAds?.map(tad => tad._id === ad._id ? ad : tad)
                ])            
            }
        }
    }, [ads])

    useEffect(() => {
        dispatch(getAds());
    }, [])

    useEffect(() => {
        if (Object.values(subCategory).length > 0) {
            setState({
                ...state,
                category: subCategory.category,
                subCategory: subCategory._id,
            });
        } else {
            setState({
                ...state,
                subCategory: "",
            });
            dispatch(getAds({
                ...state,
                specs,
                subCategory: ""
            }));
        }
    }, [subCategory])

    useEffect(() => {
        if (typeof category === 'string') {
            setState({
                ...state,
                category,
                subCategory: ""
            });
            dispatch(getAds({
                ...state,
                specs,
                category,
                subCategory: ""
            }));
        }
    }, [category])

    useEffect(() => {
        if (typeof city === 'string') {
            setState({
                ...state,
                city
            });
            dispatch(getAds({
                ...state,
                city,
                specs
            }));
        }
    }, [city])

    useEffect(() => {
        if (Object.values(specs).length > 0 || state.price || state.subCategory || state.city) {
            dispatch(getAds({
                ...state,
                specs
            }));
            dispatch({
                type: SET_SEARCH,
                payload: {
                    ...state,
                    specs
                }
            })
        }
    }, [specs, state])

    useEffect(() => {
        if (!!sortMethod) {
            switch (sortMethod) {
                case sortMethods.NEWEST:   
                    setRandomAds([
                        ...randomAds.sort((prevObj, nextObj) => {
                            let prevDate = new Date(prevObj.date);
                            let nextDate = new Date(nextObj.date);
                            if (prevDate > nextDate) {
                                return -1
                            }
                            if (prevDate < nextDate) {
                                return 1
                            }
                            return 0
                        })
                    ]);          
                    break;
                case sortMethods.OLDEST: 
                    setRandomAds([
                        ...randomAds.sort((prevObj, nextObj) => {
                            let prevDate = new Date(prevObj.date);
                            let nextDate = new Date(nextObj.date);
                            if (prevDate < nextDate) {
                                return -1
                            }
                            if (prevDate > nextDate) {
                                return 1
                            }
                            return 0
                        })
                    ]);                    
                    break;
                case sortMethods.MAXPRICE: 
                    setRandomAds([
                        ...randomAds.sort((prevObj, nextObj) => {
                            console.log(Number(prevObj.price), Number(nextObj.price));
                            console.log(Number(prevObj.price) > Number(nextObj.price));
                            if (Number(prevObj.price) > Number(nextObj.price)) {
                                return -1;
                            }
                            if (Number(prevObj.price) < Number(nextObj.price)) {
                                return 1;
                            }
                            return 0;
                        })
                    ]); 
                    break;
                case sortMethods.MINPRICE: 
                    setRandomAds([
                        ...randomAds.sort((prevObj, nextObj) => {
                            if (Number(prevObj.price) < Number(nextObj.price)) {
                                return -1;
                            }
                            if (Number(prevObj.price) > Number(nextObj.price)) {
                                return 1;
                            }
                            return 0;
                        })
                    ]);
                    break;
                case sortMethods.POPULAR:
                    setRandomAds([
                        ...randomAds.sort((prevObj, nextObj) => {
                            if (prevObj.likes.length > nextObj.likes.length) {
                                return -1;
                            }
                            if (prevObj.likes.length < nextObj.likes.length) {
                                return 1;
                            }
                            return 0;
                        })
                    ]);
                    break;
            
                default:
                    break;
            }
        }
    }, [sortMethod])

    useEffect(() => {
        console.log(randomAds);
    }, [randomAds])

    return <Grid container spacing={1}>
        {
            subCategory.fields && <Grid item xs={12}>
                <Grid container spacing={1}>
                {
                    subCategory.fields?.map((field, index) => field.name !== 'Color' && <Grid key={"field-item-" + index} item xs={6} md={2}>
                        <Field 
                            type={field.type}
                            name={field.name}
                            datas={field.specs}
                            value={specs[field._id]}
                            onChange={value => setSpecs({
                                ...specs,
                                [field._id]: value
                            })}
                            filter
                            size="small"
                        />
                    </Grid>)
                }
                    <Grid item xs={6} md={3}>
                        <FormControl>
                            <Typography variant="subtitle2" className="mb-2" >Price</Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        label="From"
                                        variant="outlined"
                                        onChange={ev => setState({
                                            ...state,
                                            price: {
                                                ...state.price,
                                                from: ev.target.value
                                            }
                                        })}            
                                        fullWidth       
                                        size="small"   
                                        type="number"                   
                                    />
                                </Grid>    
                                <Grid item xs={6}>
                                    <TextField
                                        label="To"
                                        variant="outlined"
                                        onChange={ev => setState({
                                            ...state,
                                            price: {
                                                ...state.price,
                                                to: ev.target.value
                                            }
                                        })}       
                                        fullWidth            
                                        size="small"   
                                        type="number"                 
                                    />
                                </Grid>                    
                            </Grid>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>
        }
        <Grid item xs ={12}>
            <Grid container spacing={1} justify="flex-end">
                <Grid item>
                    <FormControl size="small">
                        <FormLabel>Sort : </FormLabel>
                        <Select variant="outlined" value={sortMethod} onChange={ev => setSortMethod(ev.target.value)} style={{ minWidth: 150 }}>
                            {
                                Object.values(sortMethods).map((method, index) => <MenuItem key={"sort-method-item-" + index} value={method}>{method}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Grid>              
            </Grid>
        </Grid>
        {
            progress ? <Grid item xs={12} md={12}><ProgressCircle /></Grid> :
            (randomAds.length > 0 ? randomAds.map((ad, index) => <Grid key={"ad-item-" + index} item xs={12} md={12} lg={8}>
                <AdItemPaper 
                    data={ad} 
                />           
            </Grid>) : <Grid item xs={12} md={12} className="text-center py-4">
                <Typography variant="subtitle1" color="initial" align="center">No result</Typography>
            </Grid>)
        }
    </Grid>
}
export default AdFindPage;