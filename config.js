// Import the functions you need from the SDKs you need
const firebase = require('firebase')
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDudfpxm7WhSDfnaNPNQd1RnhMyye4TkgM",
  authDomain: "homestoke-f6608.firebaseapp.com",
  projectId: "homestoke-f6608",
  storageBucket: "homestoke-f6608.appspot.com",
  messagingSenderId: "36002329420",
  appId: "1:36002329420:web:ff383e461105a2d1a095e9",
  measurementId: "G-YZPPL4N4FH"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const Produto = db.collection("Produto")