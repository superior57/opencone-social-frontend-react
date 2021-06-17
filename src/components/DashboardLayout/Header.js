import React, { Component } from "react";
import { Grid, TextField, InputAdornment, FormControl, Select, Button } from "@material-ui/core";
import { Search, Person } from "@material-ui/icons";
import { withTranslation } from "react-i18next";

class Header extends Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              hiddenLabel
              variant="outlined"
              color="primary"
              size="small"
              InputProps={{
                startAdornment: <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              }}
              placeholder={t('Search In Jordan')}      
            />
          </Grid>
          <Grid item >
            <FormControl size="small">
              <Select
                native
                value={'0'}
                variant="outlined"   
              >
                <option value="">None</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              {t('Search')}            
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" className="border-2">
              <Person />
              {t('SIGN IN')}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withTranslation()(Header);
