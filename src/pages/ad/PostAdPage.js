import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddPhotoSection from '../../components/ad/AddPhotoSection';
import ChooseSection from '../../components/ad/ChooseSection';
import ContactInfoSection from '../../components/ad/ContactInfoSection';
import PostDetailSection from '../../components/ad/PostDetailSection';
import { getCategories } from '../../store/actions/categoryActions';
import { useForm } from "react-hook-form";

const PostAdPage = () => {
    const dispatch = useDispatch(null);
    const [data, setData] = useState({
        title: "",
        description: "",
        contactName: "",
        contactEmail: ""
    });
    const { handleSubmit } = useForm();

    useEffect(() => {
        dispatch(getCategories());
    }, [])    

    const validateData = () => {
        const specs = Object.values(data.specs);
        const newSpecs = [];
        specs.forEach(spec => {
            if (typeof spec === 'object'){
                spec.forEach(ss => {
                    newSpecs.push(ss);
                })
            } else {                
                newSpecs.push(spec);
            }
        }); 
        return {
            ...data,
            specs: newSpecs
        }
    }

    const handleDataSubmit = () => {
        const adData = validateData();
        console.log(adData);
    }

    return <form onSubmit={handleSubmit(handleDataSubmit)}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <ChooseSection data={data} setData={setData} />
            </Grid>
            <Grid item xs={12}>
                <PostDetailSection data={data} setData={setData} />
            </Grid>
            <Grid item xs={12}>
                <AddPhotoSection data={data} setData={setData} />
            </Grid>              
            <Grid item xs={12}>
                <ContactInfoSection data={data} setData={setData} />
            </Grid>
        </Grid>  
    </form>
}

export default PostAdPage;