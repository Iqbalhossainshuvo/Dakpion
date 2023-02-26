// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC44YCyZXiiDHyJIHHyVFEbvX8N5XFzONc",
  authDomain: "dakpion-d0126.firebaseapp.com",
  projectId: "dakpion-d0126",
  storageBucket: "dakpion-d0126.appspot.com",
  messagingSenderId: "280439695679",
  appId: "1:280439695679:web:c8f1beea6fe7810969cb8a",
  measurementId: "G-PL0SL6CEJD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);