import React, { useEffect, useState } from "react";
import { Grid, Hidden, Drawer } from "@material-ui/core";
import { useDispatch } from "react-redux";
import SearchHeader from "./SearchHeader";
import AuthHeader from "./AuthHeader";
import { getCategories } from "../../store/actions/categoryActions";
import { getCities } from "../../store/actions/cityActions";

const Header = () => {
  const dispatch = useDispatch(null);
  const [openSearch, setOpenSearch] = useState(false);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getCities());
  }, [])

  return <Grid container spacing={1} justify="space-between" wrap="nowrap" alignItems="center">
      <Grid item sm={10} md={9}>
        <Hidden mdUp>
          <Drawer 
            open={openSearch} 
            variant="temporary" 
            anchor="top" 
            onClose={() => setOpenSearch(false)} 
            PaperProps={{
              style: {
                overflow: 'hidden',
                padding: 30
              }
            }} 
            ModalProps={{
              keepMounted: true
            }}
          >
            <SearchHeader />   
          </Drawer> 
        </Hidden>
        <Hidden smDown>
          <SearchHeader />   
        </Hidden>
      </Grid>
      <Grid item xs={12} sm={openSearch ? 2 : 12} md={3} >
        <AuthHeader openSearch={() => setOpenSearch(!openSearch)} closeSearch={() => setOpenSearch(false)} />        
      </Grid>
    </Grid>
}

export default Header;
