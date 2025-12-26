// Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtwkoUPEK7saTfY1CExt7OGTmPxrOr0-k",
  authDomain: "mamamind-29f5c.firebaseapp.com",
  projectId: "mamamind-29f5c",
  storageBucket: "mamamind-29f5c.appspot.com",
  messagingSenderId: "508802998644",
  appId: "1:508802998644:web:ae458bb6fc31b4623e0c21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
