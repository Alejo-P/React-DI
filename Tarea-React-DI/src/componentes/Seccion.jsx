import React from 'react'

function Seccion ({src, alt, claseImagen}) {
  return(
    <div className='contenedor'>
      <img className={claseImagen} src={src} alt={alt} />
      <p className='texto'>{alt}</p>
    </div>
  )
}

export default Seccion
