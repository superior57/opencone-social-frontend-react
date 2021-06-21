import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_DEVICE } from "./store/actions/types";
import { isMobile as isMobileFnc } from "./utils/device";
import jwtDecode from "jwt-decode";
import { SET_CURRENT_USER } from "./store/actions/types";
import { routeConfig } from "./utils/routeConfig";
import CustomRoute from "./components/Route/CustomRoute";
import history from "./@history";

const App = () => { 
  const state = useSelector(state => state);
  const dispatch = useDispatch(null);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: blue[500],
        light: blue[100],
        dark: blue[700]
      },
      secondary: {
        main: blue[300]
      },
      success: {
        main: green[400]
      }
    },
    typography: {
      "fontFamily": "Poppins",
    },
    overrides: {
      MuiTypography: {
        color: '#787878'
      },
      '& *': {
        fontFamily: "Poppins",
      },
    },
    direction: state.theme.direction,
  })

  const resizeListener = () => {
    dispatch({
      type: UPDATE_DEVICE,
      payload: isMobileFnc()
    })
  }

  const stayLogin = () => {
    if (localStorage.getItem('jwtToken')) {
      const decoded = jwtDecode(localStorage.getItem('jwtToken'));
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    }
  }

  useEffect(() => {
    resizeListener();
    stayLogin();  
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }  
  }, [])

  const { landingLayoutRoutes : routes } = routeConfig;
  return (
      <div className={theme.direction === "rtl" ? "direction-rtl" : ""}>
        <ThemeProvider theme={theme}>
          <Router history={history}>
            <Switch>
              <Redirect exact from="/" to="/home" />
              {
                routes.map((route, index) => <CustomRoute key={'route-' + index} {...route} />)
              }
              <Route path="/">
                <DashboardPage />
              </Route>
            </Switch>   
          </Router>  
        </ThemeProvider>      
      </div>
  )
}

export default App;
