import AcercaNosotros from './Componentes/AcercaNosotros'
import Encabezado from './Componentes/Encabezado'
import Inicio from './Componentes/Inicio'
import Logo from './Imagenes/Logo.jpg'
import Video from './Videos/Video1.mp4'

function App() {

  return (
    <>
      <Encabezado src={Logo}/>
      <Inicio video={Video}/>
      <AcercaNosotros/>
    </>
  )
}

export default App
