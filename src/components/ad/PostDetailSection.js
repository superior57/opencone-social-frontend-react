import { useSelector } from 'react-redux';
import Field from "./Field";
import { Grid, TextField, InputAdornment, Select, FormControl } from "@material-ui/core";
import AdSectionPaper from '../common/AdSectionPaper';
import { FIELD_TYPE_COLOR_SELECT } from '../../utils/fieldTypes';
import { useEffect, useState } from 'react';
import NestedSelect from '../common/select/NestedSelect';

const PostDetailSection = ({ data, setData }) => {
    const { subCategory } = useSelector(state => state.subCategory);
    const { cities } = useSelector(state => state.city);
    const { fields } = subCategory;
    const [details, setDetails] = useState({});
    const [city, setCity] = useState("");
    const [subCity, setSubCity] = useState("");

    
    useEffect(() => {
        if (fields) {
            let newDetails = {};
            fields.forEach(field => {
                newDetails[field._id] = ""
            });
            setDetails(newDetails);
        }
    }, [fields])
    useEffect(() => {
        setData({
            ...data,
            specs: details
        });
    }, [details])
    useEffect(() => {
        setData({
            ...data,
            city,
            subCity
        })
    }, [city, subCity])
    
    return <AdSectionPaper
        title="Post details"
    >
        <Grid container spacing={2} className="mb-2">
        {
            fields?.map((field, index) => <Grid 
                key={"field-item-" + index} 
                item xs={12} 
                md={field.type === FIELD_TYPE_COLOR_SELECT ? 12 : 6}
            >
                <Field
                    type={field.type}
                    name={field.name}
                    datas={field.specs}
                    value={details[field._id]}
                    onChange={value => setDetails({...details, [field._id]: value})}
                />
            </Grid>)
        }       
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                    label="Ad Title (eg: Toyota Camry 2018 for Sale)"
                    variant="outlined"
                    fullWidth
                    onChange={ev => setData({
                        ...data,
                        title: ev.target.value
                    })}
                    required
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Ad Description (Add more details)"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}      
                    onChange={ev => setData({
                        ...data,
                        description: ev.target.value
                    })}      
                    required  
                />
            </Grid>         
            <Grid item xs={12} md={6}>
                <TextField
                    label="Price"
                    variant="outlined"
                    fullWidth
                    onChange={ev => setData({
                        ...data,
                        price: ev.target.value
                    })}      
                    required 
                    type="number"
                    InputProps={{
                        endAdornment: <InputAdornment position="end" style={{ 
                            minWidth: 80
                        }}>
                            <FormControl variant="outlined" fullWidth >
                                <Select native onChange={ev => setData({
                                        ...data,
                                        currency: ev.target.value
                                    })}
                                    style={{
                                        borderTopLeftRadius: 0,
                                        borderBottomLeftRadius: 0
                                    }}
                                >
                                    <option value="JOD">JOD</option>
                                    <option value="USD">USD</option>
                                </Select>
                            </FormControl>
                        </InputAdornment>,
                        style: {
                            paddingRight: 0
                        }
                    }} 
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <NestedSelect 
                    label="Choose city and neighbourhood"
                    parentData={cities}
                    childrenKey="subCities"
                    onChangeChildren={value => setSubCity(value)}
                    onChangeParent={value => setCity(value)}
                    size="medium"
                    required
                />
            </Grid>
        </Grid>
    </AdSectionPaper>
}

export default PostDetailSection;