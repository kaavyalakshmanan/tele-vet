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
import FindVet from "./maps/FindVet";
import ProfilePage from "./VetProfile/ViewPage/ProfilePage";
import EditPage from "./VetProfile/EditPage/EditPage";
import VetDashboardInbox from "./vet-dashboard/messages/Inbox"
// import VetProfile from "./vet-dashboard/profile/VetProfile"

const TEST_USER_ID = "5f0927c903a88652b45a877a";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/user/dashboard" render={() => <UserDashboard id={TEST_USER_ID}/>}/>
            <Route path="/vet-dashboard/dashboard" component={VetDashboard}/>
            {/* <Route path="/vet-dashboard/profile/VetProfile" component={VetProfile}/> */}
            <Route path="/vet-dashboard/dashboard/inbox" component={VetDashboardInbox}/>
            <Route path="/maps/FindVet" component={FindVet}/>
            <Route path="/appointments" component={AppointmentsView}/>
            <Route path="/Vet" component={ProfilePage}/>
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
