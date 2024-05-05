import { useState } from 'react'
//Importaciones de Firebase
import appFirebase from './src/componentes/config/firebaseConfig'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import Login from './src/componentes/Login'
import Home from './src/componentes/Home'
//Constante Para autenticar desde App Firebase
const auth = getAuth(appFirebase)

function App() {

  const [usuario, setUsuario] = useState(null)
  onAuthStateChanged(auth, (usuarioFirebase)=> {
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })

  return (
    <div>
     {usuario ? <Home correoUsuario = {usuario.email}/> : <Home/> }
    </div>

  )
}

export default App
