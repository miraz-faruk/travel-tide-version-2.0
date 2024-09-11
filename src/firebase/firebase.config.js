// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYBlTb0RtHGeTMgeNlX9VhJ7TVRVqtyWY",
    authDomain: "travel-tider-version-2.firebaseapp.com",
    projectId: "travel-tider-version-2",
    storageBucket: "travel-tider-version-2.appspot.com",
    messagingSenderId: "780173888233",
    appId: "1:780173888233:web:cf95d397db31782fe6be78"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;