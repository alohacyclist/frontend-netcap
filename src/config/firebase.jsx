import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBix8J450SyTs8E6gToBGb969wQdRnRCAo",
  authDomain: "outing-8b8e8.firebaseapp.com",
  projectId: "outing-8b8e8",
  storageBucket: "outing-8b8e8.appspot.com",
  messagingSenderId: "1074537212517",
  appId: "1:1074537212517:web:8dfb8f603915281621348c",
  measurementId: "G-LCCKBSVN6K"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

export { app, db, auth };