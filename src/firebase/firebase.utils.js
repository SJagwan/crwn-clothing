import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const Config = 
    {
        apiKey: "AIzaSyBsGc7Qs8fLOgfGRVa5W8oYGADrTY47WAo",
        authDomain: "crwn-web.firebaseapp.com",
        databaseURL: "https://crwn-web.firebaseio.com",
        projectId: "crwn-web",
        storageBucket: "crwn-web.appspot.com",
        messagingSenderId: "849255987721",
        appId: "1:849255987721:web:3ed01ecf0d6acd8fb896d8",
        measurementId: "G-F7ZH8GWZ1Q"
      };

      firebase.initializeApp(Config);
      
      export  const auth=firebase.auth();
      export  const firestore=firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'});

      export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

      export default firebase;