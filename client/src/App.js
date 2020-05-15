import React, { Component } from 'react';
import './App.scss';
import Header from './components/header/Header';
import {HomePage} from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import SignInOut from './pages/signInandOut/signInOut';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import CheckOutPage from './pages/checkOutPage/CheckOutPage';
import {checkUserSession} from './redux/user/user.action'




class App extends Component {
  
  // unsubscribefromauth = null;
    componentDidMount(){
      const {checkUserSession}=this.props;
      checkUserSession();
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
  checkUserSession:()=>dispatch(checkUserSession())
  
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
