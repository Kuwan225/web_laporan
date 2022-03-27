// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBLzxl_xc_1pDCn75MD4tHEQ2MgMopOOgs",
  authDomain: "web-promosi.firebaseapp.com",
  projectId: "web-promosi",
  storageBucket: "web-promosi.appspot.com",
  messagingSenderId: "476608595535",
  appId: "1:476608595535:web:5000d3d73717d89c778c3a",
  measurementId: "G-RWLGSEEC88",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);

export default { app, database, auth };
