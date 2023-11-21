import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //config
  apiKey: "AIzaSyCh1sgwQoxXj0FjBLmAVeW5veYlmVJeWRM",
  authDomain: "login-react-3a2b6.firebaseapp.com",
  projectId: "login-react-3a2b6",
  storageBucket: "login-react-3a2b6.appspot.com",
  messagingSenderId: "1073593915712",
  appId: "1:1073593915712:web:aae8a97ce753518013c2a5",
  measurementId: "G-WCT1YJ6LX5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
