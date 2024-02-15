import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Importar el componente creado para las imagenes
import Imagenes from './components/imagenes'

// importaciones de imagenes a usar
import imagen from './assets/imagenes/html y react.jfif'
import imagen2 from './assets/imagenes/html y react2.jfif'
import imagen3 from './assets/imagenes/html y react3.jfif'
import imagenHTML1 from './assets/imagenes/html y CSS.jfif'
import imagenHTML2 from './assets/imagenes/html y CSS2.jfif'

// Funcion principal
function App() {
  const [count, setCount] = useState(0)

  const [name, setName] = useState("Descubrir")

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
        <Imagenes src={imagen} alt="Mi Primera imagen" className="img-react" />
        <Imagenes src={imagen2} alt="Segunda Imagen" className="img-react" />
        <Imagenes src={imagen3} alt="Tercera Imagen" className="img-react" />
      </div>
      <h3>Seccion de imagenes (HTML y CSS)</h3>
      <div className='container'>
        <Imagenes src={imagenHTML1} alt="Imagen HTML 1" className="img-css" />
        <Imagenes src={imagenHTML2} alt="Imagen HTML 2 - Con estilo CSS"  className="img-css" />
      </div>
      {/*Boton para cambiar el contenido*/}
      <p>Creado por: {name}</p>
      <h4>Para descibrir al creador da click en el boton "Descubrir"</h4>
      <button type="button" onClick={() => setName("Marcelo Pinzón")}>Descubrir</button>
    </>
  )
}

export default App
