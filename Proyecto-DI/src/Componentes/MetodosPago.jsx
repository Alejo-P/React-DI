import React from 'react'
//Imagenes
import ImagenMetodosPago from './Subcomponentes/ImagenMetodosPago'
import ImgTarjeta1 from '../Imagenes/ImgMetodos/tarjeta1.jpg'
import ImgTarjeta2 from '../Imagenes/ImgMetodos/tarjeta2.png'
import ImgTarjeta3 from '../Imagenes/ImgMetodos/tarjeta3.png'
import ImgTarjeta4 from '../Imagenes/ImgMetodos/tarjeta4.png'
import ImgTarjeta5 from '../Imagenes/ImgMetodos/tarjeta5.jpg'
import ImgEfectivo from '../Imagenes/ImgMetodos/efectivo.jpg'
import ImgTranferencia from '../Imagenes/ImgMetodos/transfer.jpg'
import ImgCheques from '../Imagenes/ImgMetodos/checke.jpg'

const MetodosPago = () => {
  return (
    <section id="metodos" className="metodos">
        <div className="contenido-seccion">
            <h2>MÉTODOS DE  PAGO</h2>
            <h4>Tarjetas de crédito y débito</h4>
            <div className="galeria">
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTarjeta1}/>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTarjeta2}/>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTarjeta3}/>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTarjeta4}/>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTarjeta5}/>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgEfectivo}>
                    Pago en efectivo
                </ImagenMetodosPago>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgCheques}>
                    Cheques
                </ImagenMetodosPago>
                <ImagenMetodosPago clase={"proyecto"} imagen={ImgTranferencia}>
                    Transferencia Bancaria
                </ImagenMetodosPago>
            </div>
        </div>
    </section>
  )
}

export default MetodosPago