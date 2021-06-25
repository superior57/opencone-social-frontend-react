import Grid from '@material-ui/core/Grid';
import CategoryContent from './CategoryContent';
import SubCategoryContent from './SubCategoryContent';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getCategories } from '../../../store/actions/categoryActions';
import FieldsContent from './FieldsContent';
import { getFields } from '../../../store/actions/fieldActions';

const CategoryManagement = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedSubCategory, setSelectedSubCategory] = useState(null);
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getCategories());
        dispatch(getFields());
    }, [])

    useEffect(() => {
        setSelectedSubCategory(null);
    }, [selectedCategory])

    return <>
        <Grid container spacing={0}>
            <Grid item xs={12} md={4}>
                <CategoryContent 
                    value={selectedCategory}
                    onChange={catId => setSelectedCategory(catId)}
                    onClearSelected={() => setSelectedCategory(null)}
                />
            </Grid>   
            {
                selectedCategory && <Grid item xs={12} md={4}>
                    <SubCategoryContent
                        value={selectedSubCategory}
                        categoryId={selectedCategory}
                        onChange={scatId => setSelectedSubCategory(scatId)}
                        onClearSelected={() => {
                            setSelectedSubCategory(null)
                        }}
                    />
                </Grid>
            }
            {
                selectedSubCategory && <Grid item xs={12} md={4}>
                    <FieldsContent 
                        subCategoryId={selectedSubCategory}
                    />
                </Grid>
            }
        </Grid>        
    </>
}
export default CategoryManagement;