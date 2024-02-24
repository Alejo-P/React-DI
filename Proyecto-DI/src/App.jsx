import AcercaNosotros from './Componentes/AcercaNosotros'
import Contacto from './Componentes/Contacto'
import Encabezado from './Componentes/Encabezado'
import Inicio from './Componentes/Inicio'
import MetodosPago from './Componentes/MetodosPago'
import Servicios from './Componentes/Servicios'
import Logo from './Imagenes/Logo.jpg'
import Video from './Videos/VideoOficial.mp4'

function App() {

  return (
    <>
      <Encabezado src={Logo}/>
      <Inicio video={Video}/>
      <AcercaNosotros/>
      <Servicios/>
      <Contacto/>
      <MetodosPago/>
    </>
  )
}

export default App
