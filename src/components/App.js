import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import UserDashboard from "./user/Dashboard";
import VetLogIn from "./VetLogIn";
import PetLogIn from "./PetLogIn";
import VetSignUp from "./VetSignUp";
import PetSignUp from "./PetSignUp";
import Error from "./Error"
import AppointmentsView from './Appointments/AppointmentsView'
import Maps from "./Maps";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/user/dashboard" component={UserDashboard}/>
            <Route path="/maps" component={Maps}/>
            <Route path="/appointments" component={AppointmentsView}/>
            <Route path="/vetlogin" component={VetLogIn}/>
            <Route path="/petlogin" component={PetLogIn}/>
            <Route path="/vetsignup" component={VetSignUp}/>
            <Route path="/petsignup" component={PetSignUp}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;