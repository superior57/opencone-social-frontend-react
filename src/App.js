import React, { useEffect } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import { UPDATE_DEVICE } from "./store/actions/types";
import { isMobile as isMobileFnc } from "./utils/Device";

const App = () => { 
  const state = useSelector(store => store);
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
      }
    },
    direction: state.theme.direction,
  })

  const resizeListener = () => {
    dispatch({
      type: UPDATE_DEVICE,
      payload: isMobileFnc()
    })
  }

  useEffect(() => {
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, [])

  return (
      <div className={theme.direction === "rtl" ? "direction-rtl" : ""}>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Redirect exact from="/" to="/dashboard" />
              <Route path="/home">
                <HomePage />
              </Route>  
              <Route path="/dashboard">
                <DashboardPage />
              </Route>
            </Switch>   
          </Router>  
        </ThemeProvider>      
      </div>
  )
}

export default App;
