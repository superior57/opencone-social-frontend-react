import Grid from '@material-ui/core/Grid';
import CityContent from './CityContent';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import SubCityContent from './SubCityContent';
import { getCities } from '../../../store/actions/cityActions';

const CityManagement = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const dispatch = useDispatch(null);

    useEffect(() => {
        dispatch(getCities());
    }, [])

    return <>
        <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
                <CityContent 
                    value={selectedCity}
                    onChange={cityId => setSelectedCity(cityId)}
                />
            </Grid>          
            {
                selectedCity && <Grid item xs={12} md={6}>
                    <SubCityContent
                        cityId={selectedCity}
                    />
                </Grid>
            }
        </Grid>        
    </>
}
export default CityManagement;