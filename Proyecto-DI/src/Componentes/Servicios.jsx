import React from 'react'
import Galeria from './Subcomponentes/Galeria'

//Imagenes
import Imagen1 from '../Imagenes/ImgServ/Imagen1.jpeg'
import Imagen2 from '../Imagenes/ImgServ/Imagen2.jpeg'
import Imagen3 from '../Imagenes/ImgServ/Imagen3.jpeg'
import Imagen4 from '../Imagenes/ImgServ/Imagen4.jpeg'
const Servicios = () => {
  return (
    <section id="servicios" className="servicios">
        <div className="contenido-seccion">
            <h2>SERVICIOS</h2>
            <div className="galeria">
                <Galeria imagen={Imagen1} clase={"proyecto"}>
                    Enderezada y Pintura
                </Galeria>
                <Galeria imagen={Imagen2} clase={"proyecto"}>
                    Reparación de colisone
                </Galeria>
                <Galeria imagen={Imagen3} clase={"proyecto"}>
                    Servicio Express
                </Galeria>
                <Galeria imagen={Imagen4} clase={"proyecto"}>
                    Mecanica en General
                </Galeria>
            </div>
        </div>
    </section>
  )
}

export default Servicios