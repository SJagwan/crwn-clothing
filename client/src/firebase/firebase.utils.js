import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { putResolve } from 'redux-saga/effects';

const Config = {
  apiKey: "AIzaSyBsGc7Qs8fLOgfGRVa5W8oYGADrTY47WAo",
  authDomain: "crwn-web.firebaseapp.com",
  databaseURL: "https://crwn-web.firebaseio.com",
  projectId: "crwn-web",
  storageBucket: "crwn-web.appspot.com",
  messagingSenderId: "849255987721",
  appId: "1:849255987721:web:3ed01ecf0d6acd8fb896d8",
  measurementId: "G-F7ZH8GWZ1Q"
};

      export const createUserProfileDoc = async (userAuth,additionalData)=>{
        if(!userAuth) return;
        const userRef=firestore.doc(`users/${userAuth.uid}`);
        const snapshot=await userRef.get();
        if(!snapshot.exists)
        {
          const {displayName , email}=userAuth;
          const createDate=new Date();
          try{
            userRef.set({
              displayName,
              email,
              createDate,
              ...additionalData
            })

          }catch(error){
            console.log('error creating user',error.message);

          }
          
        }
        return userRef;
      }



      export const getUserCartRef = async userId => {
        const cartsRef = firestore.collection('carts').where('userId', '==', userId);
        const snapShot = await cartsRef.get();
      
        if (snapShot.empty) {
          const cartDocRef = firestore.collection('carts').doc();
      
          await cartDocRef.set({ userId, cartItems: [] });
          return cartDocRef;
        } else {
          return snapShot.docs[0].ref;
        }
      };




      export const addCollectionAndDocuments = async (collectionKey,objectToAdd)=>{
        const CollectionRef= firestore.collection(collectionKey);
        const batch=firestore.batch();
        objectToAdd.forEach(obj =>{
          const newDocRef=CollectionRef.doc();
          batch.set(newDocRef,obj);
        });
        return await batch.commit();
      };

      export const covertCollectionsSnapshotToMap=(collectionSnapshot)=> {
        const TransformedCollection=collectionSnapshot.docs.map(doc => {
          const {title,items} =doc.data();
          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items          
          }
        });
        return TransformedCollection.reduce((accumulator,collection)=>{
          accumulator[collection.title.toLowerCase()]=collection;
          return accumulator;
          },{});

      }
      export const getCurrentUser=()=>{
        return new Promise((resolve,reject)=>{
          const unsubscribe = auth.onAuthStateChanged(userAuth=>{
            unsubscribe();
            resolve(userAuth);
          },reject)

          })
        }


      firebase.initializeApp(Config);
      
      export  const auth=firebase.auth();
      export  const firestore=firebase.firestore();

      export const googleProvider = new firebase.auth.GoogleAuthProvider();
      googleProvider.setCustomParameters({prompt:'select_account'});

      // export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);

      export default firebase;