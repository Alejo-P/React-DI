import React from 'react'

const Redes = ({url, clase}) => {
  return (
    <a href={url} target="_blank"><i className={clase}></i></a>
  )
}
export default Redes
