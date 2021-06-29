import { Grid, TextField, InputAdornment, FormControl, Select, Button, MenuItem, InputLabel, makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { Search } from "@material-ui/icons";
import { useEffect, useState } from "react";
import NestedMenuItem from "material-ui-nested-menu-item";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategory } from "../../store/actions/subCategoryActions";
import { useHistory } from "react-router-dom";
import { getAds } from "../../store/actions/adActions";


const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 150,
    },
    nestedMenuItem: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'white !important',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08) !important',
        }
    }
}))

const searchPage = "/find";

const SearchHeader = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const { categories } = useSelector(state => state.category);
    const { search } = useSelector(state => state.ad);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("")
    const [tempComponent, setTempComponent] = useState("");
    const [menuOpen, setMenuOpen] = useState(null);
    const dispatch = useDispatch(null);
    const history = useHistory();

    useEffect(() => {
        dispatch(getSubCategory(selectedSubCategory));
    }, [selectedSubCategory])

    const handleClickSearchButton = ev => {
        history.push(searchPage);
        dispatch(getAds(search));    
    }

    return <Grid container spacing={1}>
        <Grid item xs={12}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
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
                <Grid item xs={3}>
                    <FormControl size="small" fullWidth>
                    <Select
                        native
                        variant="outlined"   
                    >
                        <option value="">All city</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <FormControl variant="outlined" className={classes.formControl} size="small" fullWidth>
                        <InputLabel id="category-filter-label">All categories</InputLabel>
                        <Select
                            labelId="category-filter-label"
                            value={selectedCategory || selectedSubCategory}
                            onChange={ev => setSelectedCategory(ev.target.value)}
                            label="All categories"
                            open={menuOpen === 'category'}
                            onOpen={() => setMenuOpen('category')}
                            onClose={() => setMenuOpen(null)}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {
                                categories.map((cat, c_index) => cat.subCategories?.length > 0 ? <NestedMenuItem
                                    key={"cat-item-" + c_index}
                                    label={cat.name}
                                    parentMenuOpen
                                    className={classes.nestedMenuItem}
                                    value=""
                                >
                                    {
                                        cat.subCategories.map((subCat, sc_index) => <MenuItem 
                                            key={"subcat-item-" + sc_index}
                                            value={subCat._id}
                                            onClick={() => {
                                                setSelectedCategory(null);
                                                setSelectedSubCategory(subCat._id);
                                                setMenuOpen(null);
                                                setTempComponent(<MenuItem value={subCat._id} style={{ display: 'none' }}>{subCat.name}</MenuItem>)
                                            }}
                                            selected={selectedSubCategory === subCat._id}
                                        >
                                            {subCat.name}
                                        </MenuItem>)
                                    }
                                </NestedMenuItem> : 
                                <MenuItem key={"cat-item-" + c_index} value={cat._id} >{cat.name}</MenuItem>)
                            }
                            {
                                tempComponent
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={2}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        onClick={handleClickSearchButton}
                    >
                    {t('Search')}            
                    </Button>
                </Grid>      
            </Grid>
        </Grid>
    </Grid>
}

export default SearchHeader;