import {call,put,takeLatest,all} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {googleProvider,auth,createUserProfileDoc,getCurrentUser} from '../../firebase/firebase.utils';
import {SignInSuccess,SignInFailure,signOutSuccess,signOutFailure,signUpFailure,signUpSuccess} from './user.action'


export function* getSnapShotFromUserAuth(userAuth,additionalData){
    try{
        const userRef =yield call(createUserProfileDoc,userAuth,additionalData);
        const usersnapshot=yield userRef.get();
         yield put(SignInSuccess({id:usersnapshot.id,...usersnapshot.data()}))

    }catch(error){
        yield put(SignInFailure(error.message))
    }
}



export function* signInWithGoogle(){
    try{
        const {user}=yield auth.signInWithPopup(googleProvider);
        yield getSnapShotFromUserAuth(user);
        

    }catch(error){
        yield put(SignInFailure(error.message))
    }
}
export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}



export function* signInWithEmail({payload:{email,password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapShotFromUserAuth(user);
        
    }catch(error){
        yield put(SignInFailure(error.message))
    }

}
export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}



export function* isUserAuthenticated(){
    try{
        const userAuth=yield call(getCurrentUser);
        if(!userAuth) return;

        yield getSnapShotFromUserAuth(userAuth)

    }catch(error){
       yield put(SignInFailure(error.message))
    }

}
export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}




export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess())
    }catch(error){
        yield put(signOutFailure(error.message))
    }


}
export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* signUp({payload:{email,password,displayName}}){
    try{
        const {user}=yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}))
    }catch(error){
        yield put(signUpFailure(error.message))
    }

}
export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUp)
}
export function* signInAfterSignUp({payload:{user,additionalData}}){
    try{
        yield getSnapShotFromUserAuth(user,additionalData)
    }catch(error){
        yield put(SignInFailure(error.message));
    }
}
export function* onSignUpSuccess(){
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInAfterSignUp)
}


export function* userSagas(){
    yield all([call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)   
    ]);
}