import AdSectionPaper from "../common/AdSectionPaper";
import Grid from '@material-ui/core/Grid'
import { DropzoneArea } from "material-ui-dropzone";

const AddPhotoSection = ({ data, setData }) => {
    return <AdSectionPaper
        title="Add photo"
    >
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <DropzoneArea 
                    dropzoneClass="w-100 p-3"
                    acceptedFiles={['image/*']}
                    onChange={photos => setData({
                        ...data,
                        images: photos
                    })}
                    dropzoneText={"* Uploading photos will increase views over your Ad."}         
                    showAlerts={false}
                    filesLimit={20}   
                />              
            </Grid>          
        </Grid>                              
    </AdSectionPaper>
}

export default AddPhotoSection;