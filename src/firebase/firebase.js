// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";//firestore is database and firebase is company name
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyC_M_Zms0WjMvWkL7FMu2OrZbA2PLeTi-o",
//   authDomain: "instagram-clone-e66bf.firebaseapp.com",
//   projectId: "instagram-clone-e66bf",
//   storageBucket: "instagram-clone-e66bf.appspot.com",
//   messagingSenderId: "14097746504",
//   appId: "1:14097746504:web:55453d1222884f0994e67d",
//   measurementId: "G-0R4K9CMHGM"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain:import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, 
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore=getFirestore(app);
const storage= getStorage(app);
const auth =getAuth(app);
export { app, auth, firestore , storage , analytics};

