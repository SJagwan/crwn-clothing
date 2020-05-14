import {all,call} from 'redux-saga/effects';
import {shopSagas} from './shop/shop.saga'
import {userSagas} from '../redux/user/user.saga';
import {cartSagas} from '../redux/cart/cart.saga'

export function* rootSaga(){
    yield all([call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}