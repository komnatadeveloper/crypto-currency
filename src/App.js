import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import './App.css';

import AppNavbar from './components/layout/AppNavbar';
import Home from './components/home/Home';
import { AppFooter } from './components/layout/AppFooter';
import { FundsPage } from './components/funds/FundsPage';
import  TestPage  from './components/test-page/TestPage';
import LoginPage from './components/login/LoginPage';
import CreateAccount from './components/login/CreateAccount';
import  CreateAccountByPasswordPage  from './components/login/CreateAccountByPasswordPage';
import { CreateAccountByWallet } from './components/login/CreateAccountByWallet';
import { AccountsPage } from './components/accounts/AccountsPage';


// Redux
import { Provider} from 'react-redux'
import store from './store';



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
              <Route exact path='/accounts' component={AccountsPage} />
              <Route exact path='/test-page' component={TestPage} />
              <Route exact path='/login' component={LoginPage} />
              <Route exact path='/create-account' component={CreateAccount} />
              <Route
                exact
                path='/create-account/password'
                component={CreateAccountByPasswordPage}
              />
              <Route
                exact
                path='/create-account/wallet'
                component={CreateAccountByWallet}
              />

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
