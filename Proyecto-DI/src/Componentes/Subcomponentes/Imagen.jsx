import React from 'react'

const Imagen = ({imagen, clase}) => {
  return (
    <div className={clase}>
        <img src={imagen} alt=""/>
    </div>
  )
}

export default Imagen