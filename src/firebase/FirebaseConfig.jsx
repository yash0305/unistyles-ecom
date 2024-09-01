// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh9nJ7xVfzf2W85KSKcjayeacu8nNzV04",
  authDomain: "myecom-95890.firebaseapp.com",
  projectId: "myecom-95890",
  storageBucket: "myecom-95890.appspot.com",
  messagingSenderId: "161291263731",
  appId: "1:161291263731:web:1e7662a98eb625fc88e186"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }