import AdSectionPaper from "../common/AdSectionPaper"
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const ContactInfoSection = ({ data, setData, onSubmit }) => {
    return <AdSectionPaper
        title="Contact information"
    >
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <TextField
                    variant="outlined"
                    label="Name"
                    fullWidth   
                    type="name"   
                    className="mb-2"       
                    onChange={ev => setData({
                        ...data,
                        contactName: ev.target.value
                    })}   
                    required
                />
            </Grid>          
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <TextField
                    variant="outlined"
                    label="Email"
                    fullWidth      
                    type="email"    
                    className="mb-2"       
                    onChange={ev => setData({
                        ...data,
                        contactEmail: ev.target.value
                    })}   
                    required
                />
            </Grid>          
        </Grid>
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="large" 
                    className="mt-4"
                    // onClick={onSubmit}
                    type="submit"
                >
                    Save and Submit Ad                  
                </Button>
            </Grid>          
        </Grid>
        
    </AdSectionPaper>
}

export default ContactInfoSection;