import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from "react-redux";

class App extends Component {  
  render() {
    return (
        <div className={this.props.theme.direction === "rtl" ? "direction-rtl" : ""}>
          <ThemeProvider theme={this.props.theme}>
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
    );
  }
}

const mapStateToProps = state => ({
  theme: createMuiTheme({
    palette: {
      primary: {
        main: blue[700],
        light: blue[100]
      },
      secondary: {
        main: blue[300]
      }
    },
    typography: {
      "fontFamily": "Poppins"
    },
    direction: state.theme.direction
  })
})

export default connect(mapStateToProps)(App);
