import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/home/Home';
import { AppNavbar2 } from './components/layout/AppNavbar2';
import { AppFooter } from './components/layout/AppFooter';


const App = () => {
  return (
    <div className='App bg-dark' >
      <Router>
        <AppNavbar />
        <div  id='app-container'>
          <Switch>
            <Route exact path='/' component={Home} />

            <p>This is App</p>
          </Switch>
        </div>
        <AppFooter />
      </Router>
    </div>
  );
}

export default App;
