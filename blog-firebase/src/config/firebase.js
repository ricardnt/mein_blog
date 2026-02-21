// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcUcSjzO2PuOQ4fM5SgXSPCVsUpd1aeuM",
  authDomain: "blog-e5e54.firebaseapp.com",
  projectId: "blog-e5e54",
  storageBucket: "blog-e5e54.firebasestorage.app",
  messagingSenderId: "1042767646676",
  appId: "1:1042767646676:web:7b03359013d369a99ed041"
};


// 2. Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 3. Inicializar Firestore (la base de datos)
const db = getFirestore(app);

// 4. Exportamos 'db' para usarlo en el resto de la app
export { db };