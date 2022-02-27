// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";
import { getFirestore, collection, getDocs, getDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaUPfWyytNOmILSBmQ01OUz7dSBF2Kx1Q",
  authDomain: "oasis-1975c.firebaseapp.com",
  projectId: "oasis-1975c",
  storageBucket: "oasis-1975c.appspot.com",
  messagingSenderId: "458786288388",
  appId: "1:458786288388:web:492bc85d45560310495651",
  measurementId: "G-ZCFX8FB3BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const usersCol = collection(db, 'users');
const usersQuery = query(usersCol, where('type', '==', 'Teacher'));

onAuthStateChanged(auth, user => {
    if (user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});

// const analytics = getAnalytics(app);
const userSnapshot = await getDocs(usersQuery);
const userDocs = userSnapshot.forEach((snap) => {
    console.log('Document ' + snap.id + ' contains ' + JSON.stringify(snap.data()));
});

// console.log(snapshot);