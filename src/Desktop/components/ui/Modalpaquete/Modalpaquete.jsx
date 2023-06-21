import React from 'react';

export const CardsLugar = ({stylep,img,content,price,styleImagen,contentPrecio,contentH2,contentP}) => {  

    return (
    <div className='CardsLugar'>
      <img src={img} alt="Cartagena" className={styleImagen}/>     
      
      <div className={content}>
        <h2>{contentH2}</h2>
        <div className='description'>
        <p className={stylep}>{contentP}</p>
        </div>
        <p className={price}>{contentPrecio}</p>
      </div>
    </div>
  )
}