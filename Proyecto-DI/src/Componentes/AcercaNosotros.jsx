import React from 'react'
import Imagen from './Subcomponentes/Imagen'
import Icono1 from '../Imagenes/ImgAcerca/icon1.jpg'
import Icono2 from '../Imagenes/ImgAcerca/icon2.jpg'
import Icono3 from '../Imagenes/ImgAcerca/icon3.jpg'
import Icono4 from '../Imagenes/ImgAcerca/icon4.jpg'
import Icono5 from '../Imagenes/ImgAcerca/icon5.jpg'
import Icono6 from '../Imagenes/ImgAcerca/icon6.jpeg'
import Icono7 from '../Imagenes/ImgAcerca/icon7.jpg'
import Icono8 from '../Imagenes/ImgAcerca/icon8.jpg'
import Icono9 from '../Imagenes/ImgAcerca/icon9.jpg'
import Icono10 from '../Imagenes/ImgAcerca/icon10.jpg'
import Icono11 from '../Imagenes/ImgAcerca/icon11.jpg'
import Icono12 from '../Imagenes/ImgAcerca/icon12.jpg'

//Productos
import Producto1 from '../Imagenes/ImgAcerca/pro1.jpg'
import Producto2 from '../Imagenes/ImgAcerca/pro2.jpg'
import Producto3 from '../Imagenes/ImgAcerca/pro3.jpg'
import Producto4 from '../Imagenes/ImgAcerca/pro4.jpg'
const AcercaNosotros = () => {
  return (
    <section id="acerca" className="acerca">
        <div className="contenido-seccion">
            <h2>NOSOTROS</h2>
            <p>Full Prestige es una empresa consolidada desde....., contamos con una amplia trayectoria y conformado por un excelente equipo de trabajo (EX TECNICOS DE TOYPTA) Nuestra mision, complacer y hacer realidad las espectativas de cada uno de nuetsros clientes. 
                Nuestro objetivo mejorar y superar los requerimientos para satisfaccion de la empresa, nuestro equipo y sobretodo nuestros clientes.
                Contamos con las mejores tecnologias y un excelente equipo de trabajo, con años de experiencia, ex tecnicos de Toyota.
                dam laudantium tenetur repudiandae, suscipit rem esse recusandae, distinctio quo labore. Non ratione, s
                imilique consequuntur quo consequatur repudiandae perspiciatis!
            </p>
            <h3>Somos Multimarca</h3>
            <div className="multimarca">
                <Imagen imagen={Icono1} clase={"marcas"}/>
                <Imagen imagen={Icono2} clase={"marcas"}/>
                <Imagen imagen={Icono3} clase={"marcas"}/>
                <Imagen imagen={Icono4} clase={"marcas"}/>
                <Imagen imagen={Icono5} clase={"marcas"}/>
                <Imagen imagen={Icono6} clase={"marcas"}/>
                <Imagen imagen={Icono7} clase={"marcas"}/>
                <Imagen imagen={Icono8} clase={"marcas"}/>
                <Imagen imagen={Icono9} clase={"marcas"}/>
                <Imagen imagen={Icono10} clase={"marcas"}/>
                <Imagen imagen={Icono11} clase={"marcas"}/>
                <Imagen imagen={Icono12} clase={"marcas"}/>
            </div>
            <h3>Trabajamos con los mejores productos</h3>
            <div className="Productos">
                <Imagen imagen={Producto1} clase={"producto"}/>
                <Imagen imagen={Producto2} clase={"producto"}/>
                <Imagen imagen={Producto3} clase={"producto"}/>
                <Imagen imagen={Producto4} clase={"producto"}/>
            </div>
        </div>
    </section>
  )
}

export default AcercaNosotros