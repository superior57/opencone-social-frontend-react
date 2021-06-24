import Grid from '@material-ui/core/Grid';
import CategoryContent from './CategoryContent';
import SubCategoryContent from './SubCategoryContent';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCategories } from '../../../store/actions/categoryActions';

const CategoryManagement = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return <>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <CategoryContent 
                    value={selectedCategory}
                    onChange={catId => setSelectedCategory(catId)}
                />
            </Grid>          
            {
                selectedCategory && <Grid item xs={12} md={6}>
                    <SubCategoryContent
                        categoryId={selectedCategory}
                    />
                </Grid>
            }
        </Grid>        
    </>
}
export default CategoryManagement;