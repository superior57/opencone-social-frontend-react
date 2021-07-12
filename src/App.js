import React, { useEffect, useLayoutEffect } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import { useSelector, useDispatch } from "react-redux";
import { ADD_CHAT_USER, DELETE_MESSAGE, NEW_MESSAGE, UPDATE_DEVICE } from "./store/actions/types";
import { isMobile as isMobileFnc } from "./utils/device";
import { routeConfig } from "./utils/routeConfig";
import CustomRoute from "./components/Route/CustomRoute";
import history from "./@history";
import { checkAuthenticate } from "./store/actions/authActions";
import { isEmpty } from "./utils/functions";
import socketIOClient from "socket.io-client";
import { SOCKET_ADD_CONTACT, SOCKET_DELETE_MESSAGE, SOCKET_RECEIVED_MESSAGE } from "./utils/event.types";


const App = () => { 
  const state = useSelector(state => state);
  const auth = useSelector(state => state.auth);
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

  useLayoutEffect(() => {
    dispatch(checkAuthenticate());
    resizeListener();
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }  
  }, [])

  useEffect(() => {
    if (!isEmpty(auth.user)) {
      const socket = socketIOClient();
      socket.on(SOCKET_RECEIVED_MESSAGE, (chat) => {
        if (chat.receiver._id === auth.user.id) {
            dispatch({
                type: NEW_MESSAGE,
                payload: chat
            })
        }
      });
      socket.on(SOCKET_ADD_CONTACT, (contact) => {
        if (contact.user._id === auth.user.id) {
          dispatch({
            type: ADD_CHAT_USER,
            payload: contact
          })
        }
      });
      socket.on(SOCKET_DELETE_MESSAGE, (id) => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: id
        })
      })
    }
  }, [auth.user])

  const { landingLayoutRoutes : routes } = routeConfig;
  return (
      <div className={theme.direction === "rtl" ? "direction-rtl" : ""}>
        <ThemeProvider theme={theme}>
          {/* <ProgressBar /> */}
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
