// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmkD6tU4Kwes7W0Z5njM78JYO2Yo_N5c8",
  authDomain: "web-app-test-78398.firebaseapp.com",
  projectId: "web-app-test-78398",
  storageBucket: "web-app-test-78398.appspot.com",
  messagingSenderId: "131020788458",
  appId: "1:131020788458:web:ed36f12b332bd301a77d93",
  measurementId: "G-4MK9GYQ07X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);