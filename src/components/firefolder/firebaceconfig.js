import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyBSGjc49KqOCtge0g_YywRvOEiFglZsnfA",
  authDomain: "emailhook-718c1.firebaseapp.com",
  projectId: "emailhook-718c1",
  storageBucket: "emailhook-718c1.appspot.com",
  messagingSenderId: "1085491735400",
  appId: "1:1085491735400:web:3a07abedbdd59ee38284dd",
  measurementId: "G-LPF3E3WMVX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
