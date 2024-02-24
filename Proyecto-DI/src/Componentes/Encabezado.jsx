import React from 'react'

const Encabezado = ({src}) => {
  return (
    <div className="contenedor-header">
        <header>
            <div className="logo">
                <img src={src} alt=""/>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#acerca">Acerca de Nosostros</a></li>
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contactos</a></li>
                </ul>
            </nav>
            <div className="Botones">
                <a href="./IniciarSesion.html" target="_blank" ><span>Iniciar Sesión</span> </a>
                <a href="./Registrarse.html" target="_blank" ><span>Registrarse</span> </a>
            </div>
        </header>
    </div>
  )
}

export default Encabezado