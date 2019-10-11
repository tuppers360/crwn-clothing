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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
