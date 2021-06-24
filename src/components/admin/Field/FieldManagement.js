import Grid from '@material-ui/core/Grid';
import FieldContent from './FieldContent';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { getFields } from '../../../store/actions/fieldActions';
import FieldSpecContent from './FieldSpecContent';

const FieldManagement = () => {
    const [selectedField, setSelectedField] = useState(null);
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getFields());
    }, [])

    return <>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <FieldContent 
                    value={selectedField}
                    onChange={fieldId => setSelectedField(fieldId)}
                />
            </Grid>          
            <Grid item xs={12} md={6}>
                <FieldSpecContent
                    // categoryId={selectedCategory}
                />
            </Grid>
        </Grid>        
    </>
}
export default FieldManagement;