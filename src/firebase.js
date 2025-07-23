  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getFirestore } from "firebase/firestore";
  import { getStorage } from "firebase/storage";


const firebaseConfig = {

  apiKey: "AIzaSyA2qm9qnBbGAEkoYITi7oeUlMXFkwToz0E",
  authDomain: "caracio001.firebaseapp.com",
  projectId: "caracio001",
  storageBucket: "caracio001.firebasestorage.app",
  messagingSenderId: "729783767737",
  appId: "1:729783767737:web:d3ba414f3ab88fe5e58168",
  measurementId: "G-5K9Y8038HJ"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
export const storage = getStorage(app);
