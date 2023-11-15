// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZC7ZEgXqKtciQHHYd7wOAtrXGCFpff2Q",
  authDomain: "assign-10-project.firebaseapp.com",
  projectId: "assign-10-project",
  storageBucket: "assign-10-project.appspot.com",
  messagingSenderId: "27751907047",
  appId: "1:27751907047:web:2abcaa2205bdfdc6496c42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;