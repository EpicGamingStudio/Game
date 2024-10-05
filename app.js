document.getElementById('signup-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simulate saving to Google Cloud
    console.log("User Signed Up:", {name, email, password});
    localStorage.setItem('user', JSON.stringify({name, email, password}));
    window.location.href = 'home.html'; // Redirect to home
});

document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        window.location.href = 'home.html'; // Redirect to home
    } else {
        alert("Invalid credentials");
    }
});

window.onload = function() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && document.getElementById('profile-name')) {
        document.getElementById('profile-name').innerText = user.name;
        document.getElementById('profile-id').innerText = user.email;  // Using email as ID for simplicity
    }
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Import additional Firebase services you plan to use
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getAuth } from "firebase/auth"; // For Authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8LPmmQktqITK6PhkVBCb51JGqEi6rHZA",
  authDomain: "gamedata-efb77.firebaseapp.com",
  databaseURL: "https://gamedata-efb77-default-rtdb.firebaseio.com",
  projectId: "gamedata-efb77",
  storageBucket: "gamedata-efb77.appspot.com",
  messagingSenderId: "452569523584",
  appId: "1:452569523584:web:b607d5af9030d3d0fc0d65",
  measurementId: "G-KEL28FPJMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app); // Initialize the Realtime Database
const auth = getAuth(app); // Initialize Firebase Authentication

// You can now use `database` and `auth` for your app's functionality

