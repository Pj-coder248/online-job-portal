// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLV-93BXQvXFt8ZKuHY4CGQ6vbKUj0r1w",
  authDomain: "online-job-portal-9736b.firebaseapp.com",
  projectId: "online-job-portal-9736b",
  storageBucket: "online-job-portal-9736b.firebasestorage.app",
  messagingSenderId: "504334609536",
  appId: "1:504334609536:web:8737efa90b03a5cb6b4a65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};