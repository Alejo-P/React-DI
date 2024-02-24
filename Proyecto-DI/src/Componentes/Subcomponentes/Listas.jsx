import React from 'react'

const Listas = ({icono, children}) => {
  return (
    <li>
        <i className={icono}></i>
        {children}
    </li>
  )
}

export default Listas