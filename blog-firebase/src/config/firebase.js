// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvVy6FAhQknEFjLdOlBr92R--FvBaKwQI",
  authDomain: "blog-carlos-859d6.firebaseapp.com",
  projectId: "blog-carlos-859d6",
  storageBucket: "blog-carlos-859d6.firebasestorage.app",
  messagingSenderId: "289099830483",
  appId: "1:289099830483:web:947b95a693fa5ce300f026"
};


// 2. Inicializar Firebase
const app = initializeApp(firebaseConfig);

// 3. Inicializar Firestore (la base de datos)
const db = getFirestore(app);

// 4. Exportamos 'db' para usarlo en el resto de la app
export { db };