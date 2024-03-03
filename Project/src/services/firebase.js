import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {
    signInWithEmailAndPassword,
    signOut as firebaseSignOut,
    getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { users } from "../utils/data.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCiqSsBQYuYPqaniBgVJmHHpsWGTbs8WR0",
    authDomain: "socialnetwork-de904.firebaseapp.com",
    databaseURL: "https://socialnetwork-de904-default-rtdb.firebaseio.com",
    projectId: "socialnetwork-de904",
    storageBucket: "socialnetwork-de904.appspot.com",
    messagingSenderId: "419015389004",
    appId: "1:419015389004:web:50afa79994c27f8daaa9e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a root reference
export const auth = getAuth();
export const db = getDatabase();
export const storage = getStorage();

export const login = async(email, pass) => {
const data = users.filter((el) => (el.email === email))
if (data.length !== 0) {
    localStorage.setItem('id_user',data[0].id);
    localStorage.setItem('name_user',data[0].name);
    localStorage.setItem('role_id',data[0].role_id);
    localStorage.setItem('email',data[0].email);
    localStorage.setItem('city',data[0].city);
    localStorage.setItem('phone',data[0].phone);
    console.log('currentUser', data[0])
}
    await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async() => {
  
    localStorage.removeItem('email');
    localStorage.removeItem('id_user');
    localStorage.removeItem('role_id');
    localStorage.removeItem('name_user');
    localStorage.removeItem('city');
    localStorage.removeItem('phone');

    await firebaseSignOut(auth);

};
