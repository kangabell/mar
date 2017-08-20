import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDglCXmo4u9TcK85k_d_xO6Bh4xPWMMbEk",
  authDomain: "mar-website-30a21.firebaseapp.com",
  databaseURL: "https://mar-website-30a21.firebaseio.com",
  storageBucket: "mar-website-30a21.appspot.com",
  messagingSenderId: "971613104370"
});

export const db = firebaseApp.database();