import { Grid } from '@material-ui/core';

const NoData = ({
    text = "No data",
    ...otherProps
}) => {
    return <Grid container spacing={1} justify="center" alignItems="center" {...otherProps} >
      <Grid item>
          {text}
      </Grid>
    </Grid>
}

export default NoData;