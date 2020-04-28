import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux'

const Header=({currentUser})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'> Shop
                </Link>
                <Link className="option" to="/contact">Contact
                </Link>
                    {
                        currentUser?
                        <div className="option" onClick={() => auth.signOut()}>SignOut</div>
                        :
                        <Link className="option" to="/signinout">SignIn</Link>

                    }
            </div>

        </div>

    )
}
const mapStateToProps = state =>({
    currentUser:state.user.currentUser

})
export default connect(mapStateToProps)(Header);