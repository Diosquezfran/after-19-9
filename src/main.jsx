import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJZgqhqbcPYPsOb8Xg31_0AMNPTJkxptA",
  authDomain: "react-comision-47195.firebaseapp.com",
  projectId: "react-comision-47195",
  storageBucket: "react-comision-47195.appspot.com",
  messagingSenderId: "531070126199",
  appId: "1:531070126199:web:350a158bcb34429c92de72"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
