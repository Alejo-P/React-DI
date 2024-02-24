import React from 'react'

const Galeria = ({children, clase, imagen}) => {
  return (
    <div className={clase}>
        <h4>{children}</h4>
        <img src={imagen} alt=""/>
    </div>
  )
}

export default Galeria