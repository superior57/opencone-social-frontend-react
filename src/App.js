import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtBoardPage from "./pages/ArtBoardPage";

import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[300]
    }
  }
})


class App extends Component {
  render() {
    return (<div>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route path="/home">
              <HomePage />
            </Route>  
            <Route path="/artboard">
              <ArtBoardPage />
            </Route>
          </Switch>   
        </Router>  
      </ThemeProvider>      
    </div>);
  }
}

export default App;
