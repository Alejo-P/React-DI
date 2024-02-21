import { useState } from 'react'
import LogoEPN from './Imagenes/EPN_logo_big.png'
import Tareas from './Componentes/Tareas'
import './App.css'

function App() {
  return (
    <>
    <div className='contenedor-logo'>
      <img src={LogoEPN} alt="Logo EPN" className='imagen'/>
      <p>Logo de la EPN</p>
    </div>
    <div className='lista-tarea'>
        <h1>Lista de tareas</h1>
        <p>Lista de tareas asignadas</p>
        <Tareas texto="Realizar las tareas pendientes"/>
        <Tareas texto="Aprender nuevos temas"/>
    </div>
      <div></div>
    </>
  )
}

export default App
