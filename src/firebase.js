import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBiXanQt-1gh3NiUYVc2tDDSrvJT-xHWJo",
    authDomain: "new-india-bank.firebaseapp.com",
    projectId: "new-india-bank",
    storageBucket: "new-india-bank.appspot.com",
    messagingSenderId: "270442361083",
    appId: "1:270442361083:web:788450cf467989354e805e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase; 