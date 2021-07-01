import { Grid, Button, withWidth, Hidden, useTheme, useMediaQuery} from '@material-ui/core';
import { Search, Person, ExitToApp } from "@material-ui/icons";
import { logoutUser } from "../../store/actions/authActions";
import UserAvatar from "../common/avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const AuthHeader = ({
  openSearch = () => {},
  closeSerch = () => {}
}) => {
    const { t } = useTranslation();
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch(null);
    const theme = useTheme();
    const isWidthDownSm = useMediaQuery(theme.breakpoints.down('sm'));

    return <Grid container spacing={1} justify="flex-end" alignItems="center">
          <Hidden mdUp>
            <Grid item>
              <Button variant="text" color="default" className="text-black-50 rounded-0" style={{ minWidth: 30 }} onClick={openSearch}>
                <Search />        
              </Button>
            </Grid>
          </Hidden>
          
          <Grid item>            
            {
              auth.isAuthenticated ? <>
                <Button 
                  variant={isWidthDownSm ? "text" : "contained"}  
                  color="primary" 
                  className={`border-2 ${isWidthDownSm && "text-black-50 rounded-0"}`} 
                  style={{ minWidth: 30 }} 
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  <ExitToApp /> &nbsp;
                  {!isWidthDownSm && t('Log out')}
                </Button>              
              </> : <>
                  <Button 
                    variant={isWidthDownSm ? "text" : "outlined"} 
                    color="primary"
                    className={`border-2 ${isWidthDownSm && "text-black-50 rounded-0"}`} 
                    style={{ minWidth: 30 }} 
                    onClick={() => history.push('login')}
                  >
                  <Person /> &nbsp;
                  {!isWidthDownSm && t('SIGN IN')}
                </Button>
              </>
            }
          </Grid>    
          {
            auth.isAuthenticated && <Grid item>
              <UserAvatar />
            </Grid>
          }  
    </Grid>
}

export default withWidth()(AuthHeader);