  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAdq_b3J9J9bj8RxGpApkeHYPKKn812fSw",
    authDomain: "clg--jet.firebaseapp.com",
    databaseURL: "https://clg--jet.firebaseio.com",
    projectId: "clg--jet",
    storageBucket: "clg--jet.appspot.com",
    messagingSenderId: "297920021609",
    appId: "1:297920021609:web:c6b547a870283c8fc28ef8",
    measurementId: "G-L8F6673SR8"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage};