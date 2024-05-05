import React, { useState } from 'react';
import './Registro.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from "./config/firebaseConfig";
import { useNavigate } from 'react-router-dom';

const auth = getAuth(appFirebase);

function Registro() {
    const redirecion = useNavigate();
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [comContrasena, setComContrasena] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contrasena !== comContrasena) {
            setError("Las contraseñas no coinciden");
            return;
        }
        
        try {
            await createUserWithEmailAndPassword(auth, correo, contrasena);
            redirecion("/Home");
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <section className="container">
            <div className="form-background1">
            <img className="Logoimg2" src="src\assets\logo2.png" alt="" />
                <h1 className='h1'>Registrarse</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className='NYA'>
                        <input type="text" onChange={(e) => setNombres(e.target.value)} placeholder="Nombres" />
                        <input type="text" onChange={(e) => setApellidos(e.target.value)} placeholder="Apellidos" />
                    </div>
                    <input type="email" onChange={(e) => setCorreo(e.target.value)} placeholder="Correo" />
                    <input type="password" onChange={(e) => setContrasena(e.target.value)} placeholder="Contraseña" />
                    <input type="password" onChange={(e) => setComContrasena(e.target.value)} placeholder="Confirmar Contraseña" />
                    <button type="submit" >Registrarse</button>
                    <p>¿Ya tienes una cuenta? <a href="/Login">Inicia Sesión</a></p>
                </form>
            </div>
            <div className="login">
            </div>
        </section>
    );
}

export default Registro;
