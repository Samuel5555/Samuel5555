// import firebase from "firebase/app";
// import "firebase/firestore";

// // Your web app's Firebase configuration
// let firebaseConfig = {
// 	apiKey: "AIzaSyBmbSg2xXXo4fKdc_zfBrtK-ZHDFOk1cV0",
// 	authDomain: "sveltefire-test-b7129.firebaseapp.com",
// 	projectId: "sveltefire-test-b7129",
// 	storageBucket: "sveltefire-test-b7129.appspot.com",
// 	messagingSenderId: "1022611496294",
// 	appId: "1:1022611496294:web:8ca2ac4ae2f9baaa22fca7",
// 	measurementId: "G-B95TGXN9LB",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export const database = firebase.firestore();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9pN_V9e3SS15DQ1OT3lXf9VeWaMJwQvk",
  authDomain: "davidibiyeomie59.firebaseapp.com",
  projectId: "davidibiyeomie59",
  storageBucket: "davidibiyeomie59.appspot.com",
  messagingSenderId: "738942976384",
  appId: "1:738942976384:web:85cc65658c881c16530165",
  measurementId: "G-TVWZSN26CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);