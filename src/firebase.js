
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCpj3Oic4tNvGGgS5z8EYuB4l2gQhXvQ1g",
  authDomain: "aparts-66554.firebaseapp.com",
  databaseURL: "https://aparts-66554-default-rtdb.firebaseio.com",
  projectId: "aparts-66554",
  storageBucket: "aparts-66554.appspot.com",
  messagingSenderId: "985643289130",
  appId: "1:985643289130:web:32bfca1bf0da243ea6d153",
  measurementId: "G-J4VSSJQHXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase()