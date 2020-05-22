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

export const createUserProfileDocument = async (userAuth, data) => {
    if(!userAuth){
        return;
    }

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...data
            })
        }catch (error){
            console.log("Error creating a user", error.message);
            
        }


    }

    return userRef
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;