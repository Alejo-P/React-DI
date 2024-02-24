import React from 'react'

const Inicio = ({video}) => {
  return (
    <section id="inicio" className="inicio">
        <div className="contenido-inicio">
            <h1><em>Empresa dedicada al mantenimiento, cuidado y reparación de tu vehículo.</em></h1>
            <div className="contenedor-video">
                <video width="640 " height="360" autoplay>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
            <div className="siguenos">
                <p>Siguenos en todas nuestras redes Sociales</p>
            </div>
            <div className="redes">
                <a href="https://www.facebook.com/fullprestige20" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/full.prestige/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://www.tiktok.com/@fullprestige?is_from_webapp=1&sender_device=pc" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
                <a href="https://www.youtube.com/@fullprestige357/videos" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                <a href="https://wa.me/593980688763" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
            </div>

            <nav className="nav2">
                <ul>
                    
                    <li><a href="#metodos">Métodos de Pago</a></li>
                    <li><a href="#preguntas">Preguntas Frecuentes</a></li>
                </ul>
            </nav>   
        </div>
    </section>
  )
}

export default Inicio