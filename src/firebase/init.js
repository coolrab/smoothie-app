import firebase from 'firebase'
// import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBk3aXXQL6IpHY8B6Yk3xsRmrGyst9enLA",
    authDomain: "smoothie-app-a095c.firebaseapp.com",
    databaseURL: "https://smoothie-app-a095c.firebaseio.com",
    projectId: "smoothie-app-a095c",
    storageBucket: "smoothie-app-a095c.appspot.com",
    messagingSenderId: "465851967682",
    appId: "1:465851967682:web:db91bb5f551545901a735b",
    measurementId: "G-8P04ZXM112"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({timestampsInSnapshots: true})
  firebase.analytics();

  //export firestore database
  export default firebaseApp.firestore()