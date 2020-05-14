import {takeEvery,put,call,all} from 'redux-saga/effects';
import {firestore,covertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionSuccess,fetchCollectionError} from '../shop/shop.action'

import {ShopActionType} from './shop.type';

export function* fetchCollectionStartAsyn(){
    try{
            const collectionRef= yield firestore.collection('collection');
            const snapshot=yield collectionRef.get();
            const collectionsMap=yield call(covertCollectionsSnapshotToMap,snapshot);
            yield put(fetchCollectionSuccess(collectionsMap))
    }catch(error){
        yield put(fetchCollectionError(error.message));
    }
}


export function* onfetchCollectionStart(){
    yield takeEvery(
        ShopActionType.FETCH_COLLECTION_START, fetchCollectionStartAsyn
    )
}

export function* shopSagas(){
    yield all([call(onfetchCollectionStart)])
}