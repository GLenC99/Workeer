import firebase from 'firebase';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDpv3MTThp_aC0VbykbZa9VQP1gjKlv3uY",
    authDomain: "workeer-system.firebaseapp.com",
    databaseURL: "https://workeer-system.firebaseio.com",
    projectId: "workeer-system",
    storageBucket: "workeer-system.appspot.com",
    messagingSenderId: "107378858995",
    appId: "1:107378858995:web:c04a82e6164e93fb799086",
    measurementId: "G-3JXBLEX4ZP"
  };
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

export default db;