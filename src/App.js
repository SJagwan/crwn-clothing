import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOut from './pages/signInandOut/signInOut';
import {Route,Switch} from 'react-router-dom';
import {auth,createUserProfileDoc} from './firebase/firebase.utils';


class App extends Component {
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }
  unsubscribefromauth = null;
  UNSAFE_componentWillMount(){
    this.unsubscribefromauth=auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth)
      {
        const userRef= await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot =>{
          this.setState({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          },()=>console.log(this.state.currentUser))
          
          
        })
      }
      else{
        this.setState({currentUser:userAuth},()=> console.log(this.state));
        
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribefromauth();

  }
  render(){

     return (
        <div className="App">
          <Header currentUser={this.state.currentUser}/>
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
