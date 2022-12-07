// Import the functions you need from the SDKs you need
const {initializeApp} = require('firebase/app')
const {getFirestore, collection, getDocs, addDoc} = require('firebase/firestore')
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
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// async function getProdutos(db) {
//   const produtosCol = collection(db, 'produtos')
//   const produtosSnapshot = await getDocs(produtosCol);
//   const produtosLista = produtosSnapshot.docs.map(doc => doc.data())
//   return produtoLista
// }

const produtosCol = collection(db, "produtos")
const receitasCol = collection(db, "receitas")

module.exports = {produtosCol, receitasCol, db}
