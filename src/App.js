import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Home from './components/home/Home';
import { AppNavbar2 } from './components/layout/AppNavbar2';
import { AppFooter } from './components/layout/AppFooter';
import { FundsPage } from './components/funds/FundsPage';

// Redux
import { Provider} from 'react-redux'
import store from './store';
import  TestPage  from './components/test-page/TestPage';



const App = () => {
  useEffect( () => {
    console.log('App.js useEffect')
  }, [])
  return (
    <Provider store={store}>
      <div className='App bg-dark'>
        <Router>
          <AppNavbar />
          <div id='app-container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/funds' component={FundsPage} />
              <Route exact path='/test-page' component={TestPage} />

              <p>This is App</p>
            </Switch>
          </div>
          <AppFooter />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
