import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Error from "./Error"
import AppointmentsView from './Appointments/AppointmentsView'
import Vet from "./VetProfile/ViewPage/ProfilePage"
import ProfilePage from "./VetProfile/ViewPage/ProfilePage";
import EditPage from "./VetProfile/EditPage/EditPage";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/features" component={Features}/>
            <Route path="/appointments" component={AppointmentsView}/>
            <Route path="/appointments2" component={AppointmentsView}/>
            <Route path="/Vet" component={ProfilePage}/>
            <Route path="/EditPage" component={EditPage}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
