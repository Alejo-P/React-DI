import React from 'react';
import Seccion from './componentes/Seccion';

// Importe de imagenes
import python from './Imagenes/R.png'

function App() {
  return (
    <div className='App'>
      <Seccion src={python} alt="Python" claseImagen="imagen"/>
    </div>
  )
};

export default App;

