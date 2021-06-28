import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import AddPhotoSection from '../../components/ad/AddPhotoSection';
import ChooseSection from '../../components/ad/ChooseSection';
import ContactInfoSection from '../../components/ad/ContactInfoSection';
import PostDetailSection from '../../components/ad/PostDetailSection';
import { getCategories } from '../../store/actions/categoryActions';
import { useForm } from "react-hook-form";
import { postAd } from '../../store/actions/adActions';

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
        const newData = {
            ...data,
            specs: newSpecs
        }
        const newFormData = new FormData();
        Object.keys(newData).forEach(d => {
            if (d === "images") {
                newData[d].forEach(img => {
                    newFormData.append(d, img);
                })
            } else if (d === "specs") {
                newFormData.append(d, JSON.stringify(newData[d]));
            }            
            else {
                newFormData.append(d, newData[d]);
            }
        })
        return newFormData;
    }

    const handleDataSubmit = () => {
        const adData = validateData();
        dispatch(postAd(adData));
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