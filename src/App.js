import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOut from './pages/signInandOut/signInOut';
import {Route,Switch} from 'react-router-dom';
import {auth,createUserProfileDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'


class App extends Component {
  
  unsubscribefromauth = null;
    componentDidMount(){
    const {setCurrentUser}=this.props;


    this.unsubscribefromauth=auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth)
      {
        const userRef= await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapshot =>{
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
            })
          });
      }
      else{
        setCurrentUser(userAuth);
      }
      
    });
  }

  componentWillUnmount(){
    this.unsubscribefromauth();

  }
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
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))

})

export default connect(null,mapDispatchToProps)(App);
