import { Grid, TextField, InputAdornment, Button, IconButton } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Search, Refresh } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategory } from "../../store/actions/subCategoryActions";
import { useHistory } from "react-router-dom";
import { getAds } from "../../store/actions/adActions";
import NestedSelect from "../common/select/NestedSelect";
import { CATEGORY_INIT, CITY_INIT, GET_CATEGORY, GET_CITY, SUBCATEGORY_INIT } from "../../store/actions/types";
import { useState } from "react";


const searchPage = "/ads";

const SearchHeader = () => {
    const { t } = useTranslation();
    const { categories } = useSelector(state => state.category);
    const { cities } = useSelector(state => state.city);
    const { search } = useSelector(state => state.ad);
    const dispatch = useDispatch(null);
    const history = useHistory();
    const [clear, setClear] = useState(false);

    const handleClickSearchButton = ev => {
        dispatch(getAds(search));    
        history.push(searchPage);
    }
    const handleChangeSubCategory = subCategory => {
        setClear(false);
        if(subCategory) {
            dispatch(getSubCategory(subCategory));
        }
    }
    const handleChangeCategory = category => {
        setClear(false);
        if (category) {
            dispatch({
                type: GET_CATEGORY,
                payload: category
            })
        }
    }
    const handleChangeCity = city => {
        setClear(false);
        dispatch({
            type: GET_CITY,
            payload: city
        })
    }
    const clearSearch = () => {
        if (!clear) {
            dispatch({
                type: SUBCATEGORY_INIT
            });
            dispatch({
                type: CATEGORY_INIT
            });
            dispatch({
                type: CITY_INIT
            })
            setClear(true);
        }
        // dispatch(getAds());
    }

    return <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                    <TextField
                    hiddenLabel
                    variant="outlined"
                    color="primary"
                    size="small"
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                        <Search />
                        </InputAdornment>
                    }}
                    placeholder={t('Search In Jordan')}  
                    fullWidth    
                    />
                </Grid>
                <Grid item  xs={12} md={3}>
                    <NestedSelect 
                        label="All Cities"
                        parentData={cities}
                        childrenKey="subCities"
                        onChangeParent={handleChangeCity}
                        clear={clear}
                        nested={false}
                    />
                </Grid>
                <Grid item xs={12} md={3}>
                    <NestedSelect 
                        label="All categories"
                        parentData={categories}
                        childrenKey="subCategories"
                        onChangeChildren={handleChangeSubCategory}
                        onChangeParent={handleChangeCategory}
                        clear={clear}
                    />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Grid container spacing={0} alignItems="center" justify="space-between">
                        <Grid item xs={10}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                fullWidth 
                                onClick={handleClickSearchButton}
                            >
                            {t('Search')}            
                            </Button>
                        </Grid>
                        <Grid item xs={2} className="d-flex d-lg-block justify-content-end">
                            <IconButton aria-label="Refresh" onClick={clearSearch}>
                                <Refresh />
                            </IconButton>
                        </Grid>                      
                    </Grid>
                </Grid>                     
            </Grid>
}

export default SearchHeader;