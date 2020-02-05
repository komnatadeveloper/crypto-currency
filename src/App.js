import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/home/Home';


const App = () => {
  return (
    <div className='App'>
      <Router>
        <AppNavbar />
        {/* <Container className='mx-auto d-block'> */}
          <Switch>
            <Route exact path='/' component={Home} />

            <p>This is App</p>
          </Switch>
        {/* </Container> */}
      </Router>
    </div>
  );
}

export default App;
