// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const dummyAPIFetch = "https://randomuser.me/api/?results=10"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyA3zF24Zq5XLEFAlp4QtN6VrQddXLzxWUM",
authDomain: "facebook-clone-8681a.firebaseapp.com",
projectId: "facebook-clone-8681a",
storageBucket: "facebook-clone-8681a.appspot.com",
messagingSenderId: "964659644767",
appId: "1:964659644767:web:d1f49689482d33dd2b4eea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new FacebookAuthProvider();
const db = getFirestore();


export {app,provider,db,dummyAPIFetch}