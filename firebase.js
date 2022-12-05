import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "@firebase/auth";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRpGsKKV27WJdgmqhU1HMTA0ki8sDeIbQ",
  authDomain: "signin-d4d32.firebaseapp.com",
  projectId: "signin-d4d32",
  storageBucket: "signin-d4d32.appspot.com",
  messagingSenderId: "238728598242",
  appId: "1:238728598242:web:f0fe21f4f10144a3ec84bb",
  measurementId: "G-4H0QEER3V5",
};

console.log("firebase config");
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true });
//const storage = getStorage();

export default firebase;
