import React, { useState } from 'react';
import './Login.css';
import appFirebase from './config/firebaseConfig';
import { getAuth } from 'firebase/auth';
import HotelList from './Hoteles';
import { Link, useNavigate } from 'react-router-dom';

const auth = getAuth(appFirebase);

function Home2({ correoUsuario }) {
    const [usuario, setUsuario] = useState(correoUsuario ? correoUsuario.split('@')[0] : null);
    const redirecion = useNavigate();

    const Inicio = () => {
        redirecion("/Login");
    };
    const Registro = () => {
        redirecion("/Registro");
    };
    return (
        <div>
            <div className="container-fluid bg-dark">
                
                <div className="container2">
                    <header className="bg-dark text-light d-flex justify-content-md-between flex-wrap justify-content-center align-items-center py-1">
                        <a href="#" className="d-flex align-items-center col-md-auto my-2">
                            <img src="src/assets/logo.png" alt="Logo" width="80" height="80" className="d-inline-block me-3 " />
                        </a>
                        <h2 className='Bienvenida'>Nos Fuimos De Viaje</h2>
                            <div className="col-md-auto text-end my-2" id="cllas">
                                <button onClick={Inicio}  className="btn btn-outline btn-outline-light me-2">
                                 Iniciar Sesión
                                </button>
                                <Link onClick={Registro} className="btn btn-outline btn-warning">
                                    Registrarse
                                </Link>
                            </div>
                    </header>
                </div>
            </div>
            <nav className="navbar bg-body-tertiary"></nav>
            <header className="header">
                <h1 className="header-title">¡Bienvenido a tu sitio de hoteles!</h1>
                <p className="header-subtitle">Explora y encuentra tu alojamiento perfecto</p>
            </header>
            <form action="">
                <div>
                    <HotelList />
                </div>
            </form>
        </div>
    );
}

export default Home2;

