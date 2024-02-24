import React from 'react'
import Listas from './Subcomponentes/Listas'

const Contacto = () => {
  return (
    <section id="contacto" className="contacto">
        <div className="contenido-seccion">
            <h2>CONTACTANOS</h2>
            <div className="fila">
                {/* FORMULARIO */}
                <div className="col">
                    <input type="text" placeholder="Tu nombre"/>
                    <input type="text" placeholder="Numero Teléfono"/>
                    <input type="text" placeholder="Dirección de correo"/>
                    <input type="text" placeholder="Tema"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>
                        Enviar Mensaje <i className="fa-solid fa-paper-plane"></i>
                    </button>
                </div>

                {/* MAPA */}
                <div className="col">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7574.439967442809!2d-78.45197548798788!3d-0.33444451232886957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd62fd7cd6c3%3A0xdfe040bb17af6d28!2sFull%20Prestige!5e0!3m2!1ses!2sec!4v1707584098101!5m2!1ses!2sec" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="info">
                        <ul>
                            <Listas icono={"fa-solid fa-location-dot"}>
                                Sangolqui-España 686 (Detrás de la Nova Clinica del Valle)
                            </Listas>
                            <Listas icono={"fa-brands fa-whatsapp"}>
                                Contactame: 0980688763
                            </Listas>
                            <Listas icono={"fa-solid fa-envelope"}>
                                Email: miguel_sdq@hotmail.es
                            </Listas>
                            <Listas icono={"fa-solid fa-calendar-days"}>
                                Horario de atención: <br/>
                                Lunes-Viernes (8:00 am - 5:00 pm) <br/>
                                Sabado (8:00 am - 1:00 pm) <br/>
                                Domingo (No hay atención)
                            </Listas>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contacto