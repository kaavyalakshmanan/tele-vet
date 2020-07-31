import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Login from "./LogIn/SignIn";
import About from "./About";
import UserDashboard from "./user/Dashboard";
// import VetDashboard from "./vet/Dashboard";
import PetSignUp from "./LogIn/PetSignUp";
import Error from "./Error"
import AppointmentsView from './Appointments/AppointmentsView'
import DocumentList from "./user/documents/DocumentList";
//import VetDashboardInbox from "./vet/messages/Inbox"
import VetProfilePage from "./VetProfilePage/VetProfilePage";
import LandingPage from "./LandingPage/LandingPage";
import VetFinder from "./maps/VetFinder";
import VetHome from "./vetHome/VetHome";
import VetDashboard from "./vet/Dashboard";
import {getURLParams} from "../utils/utils";
import VetProfile from "./vet/profile/VetProfile";

const TEST_USER_ID = "5f190ceb302df7267423150e";
const TEST_VET_ID = "";


function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/find/vets" component={VetFinder}/>
            <Route path="/documents" component={DocumentList}/>
            <Route path="/login/vet" render={() => <Login type={'vet'}/>}/>
            <Route path="/login/user" render={() => <Login type={'user'}/>}/>
              {/*<Route path="/vetLogin" component={VetHome}/>*/}
            <Route path="/about" component={About}/>
            <Route path="/landing" component={LandingPage}/>
            <Route path="/user/dashboard" render={() => <UserDashboard petId={TEST_USER_ID}/>}/>
            <Route path="/vet/dashboard" render={renderVetDashboard}/>
            {/*<Route path="/vet/dashboard" component={VetDashboard}/>*/}
            {/* <Route path="/vet/profile/VetProfilePage" component={VetProfilePage}/> */}
            {/*<Route path="/vet/dashboard/inbox" component={VetDashboardInbox}/>*/}
            <Route path="/vet/profile/auth" render={() => <VetProfilePage authenticated={true}/>}/>
            <Route path="/vet/profile/" render={() => <VetProfilePage authenticated={false}/>}/>
            <Route path="/appointments" component={AppointmentsView}/>
            {/*<Route path="/EditPage" component={EditPage}/>*/}
            {/*<Route path="/vetsignup" component={VetSignUp}/>*/}
            <Route path="/petsignup" component={PetSignUp}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
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
