import React, {  } from "react";
import { Grid, TextField, InputAdornment, FormControl, Select, Button } from "@material-ui/core";
import { Search, Person } from "@material-ui/icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useSelector(store => store.device);

  return (
    <div className="w-100">
      <Grid container spacing={2} justify={isMobile ? "flex-end" : "flex-start"}>
        {
          !isMobile && <Grid item xs={4}>
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
        }
        {
          !isMobile && <Grid item >
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
        }
        {
          !isMobile && <Grid item>
            <Button variant="contained" color="primary">
              {t('Search')}            
            </Button>
          </Grid>
        }
        
        <Grid item>
          {
            isMobile && <Button variant="text" color="default" className="text-black-50 rounded-0" style={{ minWidth: 30 }}>
                <Search />        
              </Button>
          }
          <Button variant={isMobile ? "text" : "outlined"} color="primary" className={`border-2 ${isMobile && "text-black-50 rounded-0"}`} style={{ minWidth: 30 }}>
            <Person />
            {!isMobile && t('SIGN IN')}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header;
