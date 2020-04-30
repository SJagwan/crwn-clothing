import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crwn.svg';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import Cart_Icon from '../cart-icon/Cart_Icon';
import Cart_Drop from '../cart_dropdown/Cart_Drop';
import {selectCurrentUser} from '../../redux/user/user.selector'
import {selectCartHidden} from '../../redux/cart/cart.selector'
import {createStructuredSelector} from 'reselect'



const Header=({currentUser,hidden})=>{
    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'> Shop </Link>
                <Link className="option" to="/contact">Contact </Link>
                    {
                        currentUser?
                        <div className="option" onClick={() => auth.signOut()}>SignOut</div>
                        :
                        <Link className="option" to="/signinout">SignIn</Link>

                    }
                 <Cart_Icon/>   
            </div> 
            {
            hidden ? null : <Cart_Drop/>
            }
            

        </div>

    )
}
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden

})
export default connect(mapStateToProps)(Header);