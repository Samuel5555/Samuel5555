import firebase from "firebase/app";
import "firebase/firestore";
let firebaseConfig = {
  apiKey: "AIzaSyD9pN_V9e3SS15DQ1OT3lXf9VeWaMJwQvk",
  authDomain: "davidibiyeomie59.firebaseapp.com",
  projectId: "davidibiyeomie59",
  storageBucket: "davidibiyeomie59.appspot.com",
  messagingSenderId: "738942976384",
  appId: "1:738942976384:web:85cc65658c881c16530165",
  measurementId: "G-TVWZSN26CV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
