import { Link }  from 'react-router-dom'
import React from 'react'

export const CardsLugarA = ({content, img, style}) => {
  return (
//   <div className='CardLugar'> 
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src={img} className='CardimagenciudadI'/></Link>
        </div>
        <div className='CarddivInformacion'>
            <h1 className={style}>{content}</h1>
        </div>
    </div>
    /* <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443016/cartagena_mhqdmc.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Cartagena</h2>
           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443476/piscilago_m9tivm.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Piscilago</h2>           
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' alt="" className='CardimagenciudadI' /></Link>    
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Volcán del Totumo</h2>
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Comuna 13 Medellin</h2>
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448884/cove%C3%B1as_xzp4zc.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Coveñas</h2>
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448921/estadio_metropolitano_z6k8cu.jpg' alt="" className='CardimagenciudadI' /></Link>   
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Estadio Metropolitano de Barranquilla</h2>
        </div>
    </div>
    <div className='CardciudadIzquierda'>
        <div className='CarddivImagen'>
        <Link to='/Lugares'><img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447768/imagen2_o1vimc.jpg' alt="" className='CardimagenciudadI' /></Link>  
        </div>
        <div className='CarddivInformacion'>
            <h2 className='Cardtitulociudad'>Piedra del peñol</h2>
        </div>
    </div> */
    
// </div>
  )
}
