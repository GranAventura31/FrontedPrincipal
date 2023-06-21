import React from 'react'

export const Kit = () => {

  return (
    <div className='Kits'>
        <div className='divImgKit'>
          <img className='imagenkit' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683229573/niko/fiesta_excursion_fmfb4a.webp" alt="" />  
        </div>
        <div className='kit'>
          <h1 className='nombrekit'>Kit especial de Gran Aventura</h1>
          <p className='desckit'>¡Este es el kit que brinda Gran Aventura para nuestros excursionistas!</p>
          <p className='preciokit'>$500.000</p>
        </div>
    </div>
  )
}
