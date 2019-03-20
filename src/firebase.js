import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	storageBucket: process.env.STORAGE_BUCKET,
	projectId: process.env.PROJECT_ID,
	messagingSenderId: process.env.MESSAGING_SENDER_ID
});

export const db = firebaseApp.database();