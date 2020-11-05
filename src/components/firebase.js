import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDCSZoQbT6WUBPuSU4g6YTBZpGeNROETE",
  authDomain: "epoch-30e26.firebaseapp.com",
  databaseURL: "https://epoch-30e26.firebaseio.com",
  projectId: "epoch-30e26",
  storageBucket: "epoch-30e26.appspot.com",
  messagingSenderId: "79355249322",
  appId: "1:79355249322:web:075287a04713854d6386d3",
  measurementId: "G-ZC905XLW08"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider()
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)

export { db, auth, googleProvider };
