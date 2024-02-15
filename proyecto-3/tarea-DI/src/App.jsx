import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importaciones de imagenes a usar
import imagen from './assets/imagenes/html y react.jfif'
import imagen2 from './assets/imagenes/html y react2.jfif'
import imagen3 from './assets/imagenes/html y react3.jfif'
import imagenHTML1 from './assets/imagenes/html y CSS.jfif'
import imagenHTML2 from './assets/imagenes/html y CSS2.jfif'

// Funcion principal
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
      <h3>Seccion de imagenes (HTML y React)</h3>
      <div className='container'>
        <div>
          <img className='img-react' src={imagen} alt="Mi Primera imagen" />
          <p>Imagen 1 (HTML y REACT).</p>
        </div>
        <div>
          <img className='img-react' src={imagen2} alt="Segunda Imagen" />
          <p>Imagen 2 (HTML y REACT).</p>
        </div>
        <div>
          <img className='img-react' src={imagen3} alt="Tercera Imagen" />
          <p>Imagen 3 (HTML y REACT)</p>
        </div>
      </div>
      <h3>Seccion de imagenes (HTML y CSS)</h3>
      <div className='container'>
        <div>
          <img className='img-css' src={imagenHTML1} alt="imagen html" />
          <p>Imagen HTML 1</p>
        </div>
        <div>
          <img className='img-css' src={imagenHTML2} alt="Imagen HTML y CSS" />
          <p>Imagen HTML 2 - Con estilo CSS</p>
        </div>
      </div>
    </>
  )
}

export default App
