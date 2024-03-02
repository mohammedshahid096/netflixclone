import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "your apikey",
  authDomain: "your auth domain",
  projectId: "project id",
  storageBucket: "your storagebucket id",
  messagingSenderId: "messaing sendir",
  appId: "appid",
  measurementId: "measurementid",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
