import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "XXXX",
  authDomain: "oildex-suppliers.firebaseapp.com",
  databaseURL: "https://oildex-suppliers.firebaseio.com",
  projectId: "oildex-suppliers",
  storageBucket: "oildex-suppliers.appspot.com",
  messagingSenderId: "XXXX"
};
var fire = firebase.initializeApp(config);
export default fire;
