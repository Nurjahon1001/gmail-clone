import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCR7-dzR_YP4ugi5mRSywwlA0E8Z0qIk6Y",
    authDomain: "clone-bf679.firebaseapp.com",
    projectId: "clone-bf679",
    storageBucket: "clone-bf679.appspot.com",
    messagingSenderId: "339948838094",
    appId: "1:339948838094:web:e47b52c52e51f2afc3449f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}