import { Grid, Button } from '@material-ui/core';
import { Search, Person } from "@material-ui/icons";
import { logoutUser } from "../../store/actions/authActions";
import UserAvatar from "../common/avatar/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const AuthHeader = () => {
    const { t } = useTranslation();
    const { isMobile } = useSelector(store => store.device);
    const history = useHistory();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch(null);

    return <Grid container spacing={1} justify="flex-end">
        {
            auth.isAuthenticated && <Grid item>
              <UserAvatar />
            </Grid>
          }
          <Grid item>
            {
              isMobile && <Button variant="text" color="default" className="text-black-50 rounded-0" style={{ minWidth: 30 }}>
                  <Search />        
                </Button>
            }
            {
              auth.isAuthenticated ? <>
                <Button variant="contained" color="primary" onClick={() => {
                  dispatch(logoutUser());
                }}>
                  Log out
                </Button>              
              </> : <>
                  <Button 
                    variant={isMobile ? "text" : "outlined"} 
                    color="primary"
                    className={`border-2 ${isMobile && "text-black-50 rounded-0"}`} 
                    style={{ minWidth: 30 }} 
                    onClick={() => history.push('login')}
                  >
                  <Person />
                  {!isMobile && t('SIGN IN')}
                </Button>
              </>
            }
          </Grid>      
    </Grid>
}

export default AuthHeader;