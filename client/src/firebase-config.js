import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzFHwvpgF-hWatdNvkJpkdYP93KrqKKXs",
  authDomain: "rainforest-6de63.firebaseapp.com",
  projectId: "rainforest-6de63",
  storageBucket: "rainforest-6de63.appspot.com",
  messagingSenderId: "183266958365",
  appId: "1:183266958365:web:f579f7a795896daa527af4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
