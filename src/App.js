import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOut from './pages/signInandOut/signInOut';
import {Route,Switch,Redirect} from 'react-router-dom';
import {auth,createUserProfileDoc} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';
import {selectCurrentUser} from './redux/user/user.selector'
import CheckOutPage from './pages/checkOutPage/CheckOutPage';




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
      // addCollectionAndDocuments('collection',collectionArray.map(({title,items})=>({title,items})));
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
            <Route  path="/shop" component={ShopPage}/>
            <Route exact path="/checkout" component={CheckOutPage}/>
            <Route exact path="/signinout" render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInOut/>)}/>
          </Switch>

        </div>
    );
  }
}
const mapStateToProps=(state)=>({
  currentUser:selectCurrentUser(state),
})
const mapDispatchToProps = dispatch =>({
  setCurrentUser: user =>dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispatchToProps)(App);
