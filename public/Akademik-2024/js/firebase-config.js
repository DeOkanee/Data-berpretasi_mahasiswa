// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAygE9mj8Rf2JOOG95KYyf_I9mu_0_3nTU",
  authDomain: "data-berprestasi-24.firebaseapp.com",
  databaseURL: "https://data-berprestasi-24-default-rtdb.firebaseio.com",
  projectId: "data-berprestasi-24",
  storageBucket: "data-berprestasi-24.appspot.com",
  messagingSenderId: "364339761695",
  appId: "1:364339761695:web:49589e41de39464055fb2a",
  measurementId: "G-56QGFLFYLX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };