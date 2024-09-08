import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJnPg0GP1qoZ7JoJSNUgvUca89yYdzFDM",
  authDomain: "riley-brown-app.firebaseapp.com",
  projectId: "riley-brown-app",
  storageBucket: "riley-brown-app.appspot.com",
  messagingSenderId: "978796645235",
  appId: "1:978796645235:web:27ae4d886611cdd6bf1306",
  measurementId: "G-M3P3GNF0ZB",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
