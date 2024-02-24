import React from 'react'
import Redes from './Subcomponentes/Redes'

const Inicio = ({video}) => {
  return (
    <section id="inicio" className="inicio">
        <div className="contenido-inicio">
            <h1><em>Empresa dedicada al mantenimiento, cuidado y reparación de tu vehículo.</em></h1>
            <div className="contenedor-video">
                <video width="640 " height="360" controls>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className="siguenos">
                <p>Siguenos en todas nuestras redes Sociales</p>
            </div>
            <div className="redes">
                <Redes clase={"fa-brands fa-facebook"} url={"https://www.facebook.com/fullprestige20"}/>
                <Redes clase={"fa-brands fa-instagram"} url={"https://www.instagram.com/full.prestige/"}/>
                <Redes clase={"fa-brands fa-tiktok"} url={"https://www.tiktok.com/@fullprestige?is_from_webapp=1&sender_device=pc"}/>
                <Redes clase={"fa-brands fa-youtube"} url={"https://www.youtube.com/@fullprestige357/videos"}/>
                <Redes clase={"fa-brands fa-whatsapp"} url={"https://wa.me/593980688763"}/>
            </div>
            <nav className="nav2">
                <ul>
                    <li><a href="#metodos">Métodos de Pago</a></li>
                </ul>
            </nav>   
        </div>
    </section>
  )
}

export default Inicio