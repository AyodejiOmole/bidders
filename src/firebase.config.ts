import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAiFnmXPpB0ZRuENV9LZGCZg6Q9-jGtRpc",
    authDomain: "bidders-e665b.firebaseapp.com",
    databaseURL: "https://bidders-e665b-default-rtdb.firebaseio.com",
    projectId: "bidders-e665b",
    storageBucket: "bidders-e665b.appspot.com",
    messagingSenderId: "739978965082",
    appId: "1:739978965082:web:b86022b83d9854b5b96863",
    measurementId: "G-M2WBJPS0WC"
};
  
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

const auth = getAuth(app);

const database = getDatabase(app);
const dbRef = ref(database);
  
export { app, auth, database, dbRef };