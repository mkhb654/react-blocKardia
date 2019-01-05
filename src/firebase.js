import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";
import "firebase/storage"

var config = {
    apiKey: "AIzaSyA86Qx1axx7rqqtcZh0Nv8V-_xJ3ZXQ2nc",
    authDomain: "fir-withreact.firebaseapp.com",
    databaseURL: "https://fir-withreact.firebaseio.com",
    projectId: "fir-withreact",
    storageBucket: "fir-withreact.appspot.com",
    messagingSenderId: "904095480988"
  };
  firebase.initializeApp(config);

  export default firebase;