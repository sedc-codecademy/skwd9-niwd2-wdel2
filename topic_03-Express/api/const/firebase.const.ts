/* 

Steps to implement firebase

1. Go to https://firebase.google.com/ (Make sure you are logged in your google account!)
2. Go to the console. https://console.firebase.google.com/
3. Click on Add Project.
4. After the project is created, click on Add Web App. (A small buttonm looking like this </> )
5. Install firebase in your node project (npm install firebase)
6. Copy the config in your folder.
7. Be careful not to push the code containing your firebaseConfig on github. It makes github complain
    BUT more importantly, you are exposing your database to everyone. I'll show you a different way of handling it in
    a later class.
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// You can provide your own app config here.
const firebaseConfig = {
  apiKey: "your-apikey-here",
  authDomain: "your-auth-domain-here",
  projectId: "your-projectid-here",
  storageBucket: "your-project-storage-bucket-here",
  messagingSenderId: "your-messaging-sender-id-here",
  appId: "your-app-id-here"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);