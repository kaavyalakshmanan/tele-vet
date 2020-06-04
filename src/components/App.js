import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Error from "./Error"

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/features" component={Features}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
