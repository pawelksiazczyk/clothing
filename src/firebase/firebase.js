import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


const config =  {
    apiKey: "AIzaSyABEc0Fh24hrHsHDnBhbAs0XT21mUI1ux4",
    authDomain: "clothing-956ca.firebaseapp.com",
    databaseURL: "https://clothing-956ca.firebaseio.com",
    projectId: "clothing-956ca",
    storageBucket: "clothing-956ca.appspot.com",
    messagingSenderId: "560334649756",
    appId: "1:560334649756:web:f9a1c91791d40151923059"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;