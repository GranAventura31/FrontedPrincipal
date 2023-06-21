import React from 'react'

export const TestimonioA = ({img, content, pcontent,pcontent2, style, stylep,stylep2, styleh1,referencia}) => {
  return (
    
    // <div className='divTestimonio'>
        <div className='CardTestimonios'>
          <div className='CardImagen'>
            <img src={img} alt="" className={style}/>
            <div className='CardH1P'>
              <h1 className={styleh1}>{content}</h1>
              <a href={referencia}><p className={stylep}>{pcontent}</p></a>
            </div> 
          </div>
          <div className='CardInformacionTestimonio'>
                <p className={stylep2}>{pcontent2}</p>
          </div>
        </div>
    //     <div className='CardTestimonios'>
    //       <div className='CardImagen'>
    //         <img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg' alt="" className='imagenTestimonio' />  
    //       </div>
    //       <div className='CardInformacionTestimonio'>
    //             <h2 className='CardtituloTestimonio'>Santa Marta</h2>
    //             <p className='Cardparrafociudad'>Santa Marta es la ciudad más antigua del país</p>
    //             <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p>
    //       </div>
    //     </div>
    //     <div className='CardTestimonios'>
    //       <div className='CardImagen'>
    //         <img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg' alt="" className='imagenTestimonio' />  
    //       </div>
    //       <div className='CardInformacionTestimonio'>
    //             <h2 className='CardtituloTestimonio'>Santa Marta</h2>
    //             <p className='Cardparrafociudad'>Santa Marta es la ciudad más antigua del país</p>
    //             <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p>
    //       </div>
    //     </div>
    //     <div className='CardTestimonios'>
    //       <div className='CardImagen'>
    //         <img src='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg' alt="" className='imagenTestimonio' />  
    //       </div>
    //       <div className='CardInformacionTestimonio'>
    //             <h2 className='CardtituloTestimonio'>Santa Marta</h2>
    //             <p className='Cardparrafociudad'>Santa Marta es la ciudad más antigua del país</p>
    //             <p className='Cardparrafociudad'>viaja con nosotros a conocer La perla de América</p>
    //       </div>
    //     </div>
    // </div>
  )
}
