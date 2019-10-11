import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDzgS-ipdeFHx5MkMJefb5_yAjSq2GCGU4",
  authDomain: "crown-db-6a911.firebaseapp.com",
  databaseURL: "https://crown-db-6a911.firebaseio.com",
  projectId: "crown-db-6a911",
  storageBucket: "crown-db-6a911.appspot.com",
  messagingSenderId: "302854020696",
  appId: "1:302854020696:web:9aa396770f0deae0ba742d",
  measurementId: "G-0WL2ZWPCN1"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
