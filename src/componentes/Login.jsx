import './Login.css';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from "./config/firebaseConfig";
import { useNavigate } from "react-router-dom";

const auth = getAuth(appFirebase);


function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const redirecion = useNavigate(); // Utiliza useNavigate para redirigir al usuario

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      // Inicia sesión con el correo electrónico y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, usuario, contraseña);
      console.log("Inicio de sesión exitoso");
      redirecion("/Home")
      // Redirige al usuario a la página de inicio
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      alert("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  return (
    <section className="container">
      <div className="form-background1">
        <img className="Logoimg" src="src\assets\logo2.png" alt="" />
        <h1>Iniciar sesión</h1>
        <form onSubmit={iniciarSesion}>
          <input type="text" id='email' onChange={(e) => setUsuario(e.target.value)} placeholder="Usuario" />
          <br />
          <input type="password" id='password' onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" />
          <br /><br />
          <button type="submit">Ingresar</button>
          <p>¿Necesitas una cuenta?<a href="/Registro">Registrarse</a></p>
        </form>
      </div>
      <div className="login"></div>
    </section>
  );
  
}

export default Login;

