import React from 'react';


function Imagenes({ src, alt, className }) {
  return (
    <div>
      <img className={className} src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
}

export default Imagenes;