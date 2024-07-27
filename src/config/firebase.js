// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8wKPDALnQSt70kdiaGuBsw0M3cQSnbr8",
  authDomain: "proyecto-coderhouse-52ee3.firebaseapp.com",
  projectId: "proyecto-coderhouse-52ee3",
  storageBucket: "proyecto-coderhouse-52ee3.appspot.com",
  messagingSenderId: "237708198041",
  appId: "1:237708198041:web:36c6500bb8c1ad461af808"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

/* productos.forEach((prod) => {
    addDoc(collection(db, 'productos'), prod)
    .then((data) => console.log(`El producto ${data.id} se subio correctamente`)
)
    .catch((error) => console.log(error))
}) */