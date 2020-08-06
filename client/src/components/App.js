import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Login from "./LoginPage/SignIn";
import About from "./About";
import UserDashboard from "./UserDasboard/Dashboard";
import Error from "./Error"
import VetProfilePage from "./VetProfilePage/VetProfilePage";
import LandingPage from "./LandingPage/LandingPage";
import VetFinder from "./FindVetPage/VetFinder";
import {getURLParams} from "../utils/utils";
import axios from "axios";
import SignIn from "./LoginPage/SignIn";
import SignUp from "./LoginPage/SignUp";

const DEV_URL = 'http://localhost:9000';
const API_BASE_URL = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?  DEV_URL : '';

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/find/vets" component={VetFinder}/>
            <Route path="/login/vet" render={() => <SignIn type={'vet'}/>}/>
            <Route path="/login/user" render={() => <SignIn type={'user'}/>}/>
            <Route path="/about" component={About}/>
            <Route path="/landing" component={LandingPage}/>
              {/*<Route path="/start" component={Login}/>*/}
            <Route path="/login" render={handleLogin}/>
            <Route path="/vet/dashboard" render={renderVetDashboard}/>
            <Route path="/vet/profile/auth" render={() => <VetProfilePage authenticated={true}/>}/>
            <Route path="/vet/profile/" render={() => <VetProfilePage authenticated={false}/>}/>
            <Route path="/petsignup" component={SignUp}/>
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

function renderVetDashboard() {
  const params = getURLParams(window.location.href);
  if (params.id) {
    return <VetProfilePage vet={null} auth={true} id={params.id}/>
  } else {
    window.location.replace('/find/vets');
  }
}

export default App;
