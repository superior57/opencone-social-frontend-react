import { Grid, FormControl, TextField, Typography } from '@material-ui/core';
import AdItemPaper from '../../components/ad/find/AdItemPaper';
import { useDispatch, useSelector } from "react-redux";
import Field from '../../components/ad/Field';
import { useEffect, useState } from 'react';
import { SET_SEARCH } from '../../store/actions/types';
import { getAds } from '../../store/actions/adActions';
import ProgressCircle from '../../components/common/progress/ProgressCircle';

const AdFindPage = () => {
    const { subCategory } = useSelector(state => state.subCategory);
    const { progress } = useSelector(state => state.dialog);
    const { ads } = useSelector(state => state.ad);
    const [state, setState] = useState({});
    const [specs, setSpecs] = useState({});
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getAds());
    }, [])
    useEffect(() => {
        if (Object.values(subCategory).length > 0) {
            setState({
                category: subCategory.category,
                subCategory: subCategory._id,
            });
            dispatch(getAds({
                category: subCategory.category,
                subCategory: subCategory._id,
            }));
            dispatch({
                type: SET_SEARCH,
                payload: {
                    category: subCategory.category,
                    subCategory: subCategory._id,
                }
            })
        }
    }, [subCategory])
    useEffect(() => {
        if (Object.values(specs).length > 0 || state.price) {
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
        {
            progress ? <Grid item xs={12} md={12} lg={8}><ProgressCircle /></Grid> :
            ads.length > 0 ? ads.map((ad, index) => <Grid key={"ad-item-" + index} item xs={12} md={12} lg={8}>
                <AdItemPaper data={ad} />           
            </Grid>) : <Grid item xs={12} md={12} lg={8} className="text-center py-4">
                <Typography variant="subtitle1" color="initial" align="center">No result</Typography>
            </Grid>
        }
    </Grid>
}
export default AdFindPage;