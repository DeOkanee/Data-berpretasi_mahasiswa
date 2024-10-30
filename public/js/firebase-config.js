// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyC2YUcIQnCUwp7OcPG58_rB6x--9Nvo97M",
    authDomain: "data-berprestasi-mahasiswa.firebaseapp.com",
    databaseURL: "https://data-berprestasi-mahasiswa-default-rtdb.firebaseio.com",
    projectId: "data-berprestasi-mahasiswa",
    storageBucket: "data-berprestasi-mahasiswa.appspot.com",
    messagingSenderId: "318837909207",
    appId: "1:318837909207:web:ee0245b4f92262cdf07292",
    measurementId: "G-T31LDNJ632"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);

export { app, db, storage };