import React, { Component,lazy,Suspense } from 'react';
import './App.scss';
import Header from './components/header/Header';

import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectCurrentUser} from './redux/user/user.selector'
import {checkUserSession} from './redux/user/user.action';


import Spinner from './components/spinner/spinner'
import ErrorBoundary from './components/error-boundary/error-boundary'

const HomePage=lazy(()=> import('./pages/HomePage/HomePage'));
const ShopPage=lazy(()=> import('./pages/ShopPage/ShopPage'));
const CheckOutPage=lazy(()=> import('./pages/checkOutPage/CheckOutPage'));
const SignInOut=lazy(()=> import('./pages/signInandOut/signInOut'));





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
          <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
                <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route  path="/shop" component={ShopPage}/>
                <Route exact path="/checkout" component={CheckOutPage}/>
                <Route exact path="/signinout" render={()=>this.props.currentUser ? (<Redirect to='/'/>):(<SignInOut/>)}/>
              </Switch>
            </Suspense>
          </ErrorBoundary>
          

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
