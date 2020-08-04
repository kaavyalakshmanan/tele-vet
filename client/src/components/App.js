import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./home/Home";
import About from "./About";
import UserDashboard from "./user/Dashboard";
import VetSignUp from "./home/VetSignUp";
import PetSignUp from "./home/PetSignUp";
import Error from "./Error"
import AppointmentsView from './Appointments/AppointmentsView'
import EditPage from "./VetProfile/EditPage/EditPage";
import DocumentList from "./user/documents/DocumentList";
import VetProfilePage from "./userUpgrade/VetProfilePage";
import LandingPage from "./LandingPage/LandingPage";
import VetFinder from "./maps/VetFinder";
import axios from "axios";

const API_BASE_URL = 'http://localhost:9000'

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/find/vets" component={VetFinder}/>
            <Route path="/documents" component={DocumentList}/>
            <Route path="/login" render={handleLogin}/>
            <Route path="/about" component={About}/>
            <Route path="/landing" component={LandingPage}/>
            <Route path="/start" component={Home}/>
            <Route path="/user/dashboard" render={() => <UserDashboard/>}/>
            {/*<Route path="/vet-dashboard/dashboard" component={VetDashboard}/>*/}
            {/* <Route path="/vet-dashboard/profile/VetProfilePage" component={VetProfilePage}/> */}
            {/*<Route path="/vet/dashboard/inbox" component={VetDashboardInbox}/>*/}
            <Route path="/vet/profile/auth" render={() => <VetProfilePage authenticated={true}/>}/>
            <Route path="/vet/profile/" render={() => <VetProfilePage authenticated={false}/>}/>
            <Route path="/appointments" component={AppointmentsView}/>
            <Route path="/EditPage" component={EditPage}/>
            <Route path="/vetsignup" component={VetSignUp}/>
            <Route path="/petsignup" component={PetSignUp}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

const handleLogin = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const password = urlParams.get('password');
  const username = urlParams.get('username');
  if (!password || !username) {
    window.location.replace('/start?loginFailed=true');
  }
  return (<UserDashboard
      userAuthData={
        axios.post(API_BASE_URL + '/auth', {
          password: password,
          username: username
        }).then(response => {
          return response.data;
        }).catch(err => {
          window.location.replace('/start?loginFailed=true');
        })
      }
  />)
}

export default App;
