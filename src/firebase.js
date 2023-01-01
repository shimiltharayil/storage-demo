import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDpAwrTBZRwxI2ohKHQyBR_-qHdbkeT8bk",
  authDomain: "search-c6396.firebaseapp.com",
  projectId: "search-c6396",
  storageBucket: "search-c6396.appspot.com",
  messagingSenderId: "724347652540",
  appId: "1:724347652540:web:24544bac9c9585e4a203b9",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = app.firestore();
export default firebase;
export { db, storage };
