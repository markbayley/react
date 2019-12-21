import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD2EWbD-5WlLQt_bUGxLy0AenmWlbS62uQ",
    authDomain: "revents-260112.firebaseapp.com",
    databaseURL: "https://revents-260112.firebaseio.com",
    projectId: "revents-260112",
    storageBucket: "revents-260112.appspot.com",
    messagingSenderId: "483881137122",
    appId: "1:483881137122:web:132145b052998968693fbb"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;