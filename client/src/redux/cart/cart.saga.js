import {all,call,takeLatest,put,select} from 'redux-saga/effects'
import UserActionTypes from '../user/user.types';
import {CartActionTypes} from './cart.type'; 
import {clearCart,setCartFromFirebase} from './cart.action';
import {selectCurrentUser} from '../user/user.selector';
import {getUserCartRef} from '../../firebase/firebase.utils';
import { selectCartItem } from './cart.selector';


export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* updateCartinFirebase(){
    const currUser=yield select(selectCurrentUser);
    if(currUser)
    {
        try{
            const cartRef = yield getUserCartRef(currUser.id);
            const cartItems = yield select(selectCartItem);
            yield cartRef.update({ cartItems });
        } catch (error) {
            console.log(error);
          }  
    }

}
export function* onCartChange(){
    yield takeLatest(
        [
            CartActionTypes.ADD_ITEM,
            CartActionTypes.REMOVE_ITEM,
            CartActionTypes.CLEAR_ITEM_FROM_CART
        ]
        ,updateCartinFirebase
    )
}
export function* checkCartFromFirebase({payload:user}){
    const cartRef = yield getUserCartRef(user.id);
    const cartSnapshot = yield cartRef.get();  
    yield put(setCartFromFirebase(cartSnapshot.data().cartItems));

}

export function* onUserSignIn() {
    yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkCartFromFirebase);
  }

export function* cartSagas(){
    yield all([call(onSignOutSuccess),call(onCartChange),call(onUserSignIn)])
}