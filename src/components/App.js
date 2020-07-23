import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./home/Home";
import About from "./About";
import UserDashboard from "./user/Dashboard";
import VetDashboard from "./vet-dashboard/Dashboard";
import VetSignUp from "./home/VetSignUp";
import PetSignUp from "./home/PetSignUp";
import Error from "./Error"
import AppointmentsView from './Appointments/AppointmentsView'
import ProfilePage from "./VetProfile/ViewPage/ProfilePage";
import EditPage from "./VetProfile/EditPage/EditPage";
import DocumentList from "./user/documents/DocumentList";
import VetDashboardInbox from "./vet-dashboard/messages/Inbox"
import VetProfilePage from "./userUpgrade/VetProfilePage";
import LandingPage from "./LandingPage/LandingPage";
import Map from "./maps/Map";
import OldFindVet from "./maps/OldFindVet";
import VetFinder from "./maps/VetFinder";
import SectionTeam from "./maps/VetFinder";


const TEST_USER_ID = "5f0a3d2066cc2719e0552463";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={LandingPage} exact/>
            <Route path="/find/vets" component={SectionTeam}/>
            <Route path="/documents" component={DocumentList}/>
            <Route path="/login" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/landing" component={LandingPage}/>
            <Route path="/user/dashboard" render={() => <UserDashboard id={TEST_USER_ID}/>}/>
            <Route path="/vet-dashboard/dashboard" component={VetDashboard}/>
            {/* <Route path="/vet-dashboard/profile/VetProfilePage" component={VetProfilePage}/> */}
            <Route path="/vet/dashboard/inbox" component={VetDashboardInbox}/>
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

export default App;
