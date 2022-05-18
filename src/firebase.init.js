// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWbWidDHisIfQfYwnpTfDOhDCA9MBt078",
  authDomain: "to-do-app-c3821.firebaseapp.com",
  projectId: "to-do-app-c3821",
  storageBucket: "to-do-app-c3821.appspot.com",
  messagingSenderId: "430937159337",
  appId: "1:430937159337:web:e09cde2a880f4dfda65bb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;