import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOut from './pages/signInandOut/signInOut';
import {Route,Switch} from 'react-router-dom';

class App extends Component {
  render(){

     return (
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route path="/signinout" component={SignInOut}/>
          </Switch>

        </div>
    );
  }
}

export default App;
