// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4vqKilcNqZimd3KDtBFpwHGkr-xzBTCA",
    authDomain: "genius-car-services-376c9.firebaseapp.com",
    projectId: "genius-car-services-376c9",
    storageBucket: "genius-car-services-376c9.appspot.com",
    messagingSenderId: "968493812697",
    appId: "1:968493812697:web:a0d6a37340acb12ecd67c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;