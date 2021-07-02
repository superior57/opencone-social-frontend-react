import AdSectionPaper from "../common/AdSectionPaper";
import Grid from '@material-ui/core/Grid'
import Dropzone from "react-dropzone";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import FilePreview from "./FilePreview";
import { CloudUpload } from "@material-ui/icons";

const height = 200;
const useStyles = makeStyles(theme => ({
    root: {
        border: 'dashed 2px #787878',
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: height,
        cursor: 'pointer',
        height: '100%',
        flexWrap: 'wrap'
    }
}))
const AddPhotoSection = ({ data, setData }) => {
    const classes = useStyles();
    const [items, setItems] = useState([]);

    useEffect(() => {
        setData({
            ...data,
            images: items
        })
    }, [items])

    const handleDrop = acceptedFiles => {
        setItems([
            ...items,
            ...acceptedFiles
        ])
    }
    const handleDelete = index => {
        setItems(items.filter((item, i) => i !== index));
    }

    return <AdSectionPaper
        title="Add photo"
    >
        <Grid container spacing={2}>
            <Grid item xs={12}>         
                <Dropzone onDrop={handleDrop}>
                    {({getRootProps, getInputProps}) => (
                        <section >
                            <div {...getRootProps()} className={classes.root}>
                                <input {...getInputProps()} />   
                                <div className="w-100 text-center text-black-50">
                                    <p>Drag and drop some files here, or click to select files</p>
                                    <CloudUpload  style={{ fontSize: 40 }} />
                                </div>
                            </div>                            
                        </section>
                    )}
                </Dropzone>
            </Grid>                                        
            <Grid item xs={12}>
                <Grid container spacing={2} className="px-3">
                    {
                        items.map((item, index) => <Grid key={'file-item-' + index} item xs={4} md={3}>
                            <FilePreview file={item} onDelete={() => {handleDelete(index)}} />
                        </Grid>)
                    }                 
                </Grid>
            </Grid>
        </Grid>                              
    </AdSectionPaper>
}

export default AddPhotoSection;