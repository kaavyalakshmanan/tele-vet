import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../css/App.css';
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Features from "./Features";
import Error from "./Error"
import Maps from "./Maps";

function App() {
  return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About}/>
            <Route path="/features" component={Features}/>
            <Route path="/maps" component={Maps}/>
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
