// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore/'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJgN67N9CKPXQhT0Ih8G8XFQtLKeIOLQ",
  authDomain: "mexn-project.firebaseapp.com",
  projectId: "mexn-project",
  storageBucket: "mexn-project.appspot.com",
  messagingSenderId: "964458702234",
  appId: "1:964458702234:web:333845927afc001ba80623"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
// export const firebaseDb = getFirestore(firebaseApp);
