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
        <Grid container spacing={0} className="h-100">
            <Grid item xs={12} md={6} className="h-100">
                <FieldContent 
                    value={selectedField}
                    onChange={fieldId => setSelectedField(fieldId)}
                />
            </Grid>          
            {
                selectedField && <Grid item xs={12} md={6}>
                    <FieldSpecContent
                        fieldId={selectedField}
                    />
                </Grid>
            }
        </Grid>        
    </>
}
export default FieldManagement;