import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxpGx5NWBb9QbhkQEvEO5hQPi8Tv1Sxg",
  authDomain: "aggieticketassistant.firebaseapp.com",
  projectId: "aggieticketassistant",
  storageBucket: "aggieticketassistant.appspot.com",
  messagingSenderId: "74178268872",
  appId: "1:74178268872:web:91e814b861ac6e70a0dffd",
  measurementId: "G-Y7XK0SMWSD",
  databaseURL: "https://aggieticketassistant-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);

export default app;