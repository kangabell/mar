import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({

	// PROD:
	apiKey: "AIzaSyDglCXmo4u9TcK85k_d_xO6Bh4xPWMMbEk",
	authDomain: "mar-website-30a21.firebaseapp.com",
	databaseURL: "https://mar-website-30a21.firebaseio.com",
	storageBucket: "mar-website-30a21.appspot.com",
	messagingSenderId: "971613104370"

	// DEV:
	// apiKey: "AIzaSyCYin13y1r_WjpXGY7MK5wKq6BL1F8LEbw",
	// authDomain: "mar-website-dev.firebaseapp.com",
	// databaseURL: "https://mar-website-dev.firebaseio.com",
	// projectId: "mar-website-dev",
	// storageBucket: "mar-website-dev.appspot.com",
	// messagingSenderId: "128897541679"

});

export const db = firebaseApp.database();