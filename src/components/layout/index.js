import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Signin from "../Pages/Signin";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import CreateProperty from '../Pages/CreateProperty';
import Profile from '../Pages/Profile';
import Property from '../Pages/Property';
import Properties from '../Pages/Properties';
const Layout = (props) => {

  return (
    <Fragment>
    <Router>
   <Header value={props.value}/>
      <div class="container">
      <Switch>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/createProperty">
          <CreateProperty />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/property">
          <Property />
        </Route>
        <Route exact path="/properties">
          <Properties />
        </Route>  

      </Switch>
    </div>
    </Router> 

 
      <Footer />
      </Fragment>
 );
};
export default Layout;
