import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDMlun0aUYma088w9dKe4WQLlnP4loI318",
    authDomain: "e-ride-9cce4.firebaseapp.com",
    projectId: "e-ride-9cce4",
    storageBucket: "e-ride-9cce4.appspot.com",
    messagingSenderId: "334649879074",
    appId: "1:334649879074:web:89cf1c97f76cedfba5387b"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
