import { useState } from 'react'
import reactLogo from './assets/react.svg'
import imagen from './assets/imagenes/html y react.jfif'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h1>Pagina de inicio</h1>
      {/*  Creacion de la pagina web con minimo de contenido*/}
      <p>Parrafo creado en HTML a traves de  React</p>
      <img className='img-display' src={imagen} alt="Mi Primera imagen" />

      
    </>
  )
}

export default App
