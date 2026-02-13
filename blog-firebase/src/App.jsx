import { useEffect, useState } from 'react'
import { db } from './config/firebase' // Importamos tu config
import { collection, getDocs } from 'firebase/firestore'

function App() {
  const [status, setStatus] = useState('Probando conexión...')

  useEffect(() => {
    const probarFirebase = async () => {
      try {
        // Intentamos leer una colección llamada "posts" (aunque esté vacía)
        const querySnapshot = await getDocs(collection(db, "posts"));
        console.log("🔥 Firebase responde:", querySnapshot);
        setStatus('✅ ¡Conexión Exitosa! Firebase está listo.');
      } catch (error) {
        console.error("❌ Error de conexión:", error);
        setStatus('❌ Error: Revisa la consola (F12) para ver el detalle.');
      }
    }

    probarFirebase();
  }, [])

  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif' }}>
      <h1>Estado de Firebase:</h1>
      <h2>{status}</h2>
    </div>
  )
}

export default App