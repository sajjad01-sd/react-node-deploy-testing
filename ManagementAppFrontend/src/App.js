import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminstrationUser from "./pages/AdminstrationUser";
import Dashboard from "./pages/Dashboard";
import Employee from "./pages/Employee";
import Home from "./pages/Home";
import LeadServer from "./pages/LeadServer";
import Login from './pages/Login';

import { PrivateRoute } from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute path="/" exact={true} children={<Home/>}/>
        <PrivateRoute path="/employee" exact={true} children={<Employee/>}/>
        <PrivateRoute path="/dashboard" exact={true} children={<Dashboard/>}/>
        <PrivateRoute path="/adminstration" exact={true} children={<AdminstrationUser/>}/>
        <PrivateRoute path="/lead-server" exact={true} children={<LeadServer/>}/>
        <PrivateRoute path="/lead-server/:id" exact={true} children={<LeadServer/>}/>
        <Route exact path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
