import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyB4-iYOeGAMTdgskbrsQrYH3cRqwE1y56c",
	authDomain: "react-twitter-web.firebaseapp.com",
	projectId: "react-twitter-web",
	storageBucket: "react-twitter-web.appspot.com",
	messagingSenderId: "447677170859",
	appId: "1:447677170859:web:87bec8ec9860134a61e3ee",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
const auth = firebase.auth();
export { auth };
