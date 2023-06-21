import { Link }  from 'react-router-dom'
import React from 'react'

export const CardsLugar = ({content, img, style}) => {
  return (
    <div className='CardciudadIzquierdaM'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src={img} className='CardimagenciudadI'/></Link>
        </div>
        <div className='CarddivInformacion'>
            <h1 className={style}>{content}</h1>
        </div>
    </div>
  )
}
