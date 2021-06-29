import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import SearchHeader from "./SearchHeader";
import AuthHeader from "./AuthHeader";
import { getCategories } from "../../store/actions/categoryActions";

const Header = () => {
  const { isMobile } = useSelector(store => store.device);
  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(getCategories());
  }, [])

  return <Grid container spacing={1} justify="space-between" wrap="nowrap">
      {
        !isMobile && <Grid item xs={12} md={9}><SearchHeader /></Grid>
      }
      <Grid item xs={12} md={3} >
        <AuthHeader />        
      </Grid>
    </Grid>
}

export default Header;
