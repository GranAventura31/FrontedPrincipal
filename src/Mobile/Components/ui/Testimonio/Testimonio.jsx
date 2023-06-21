import React from 'react'

export const Testimonio = ({img,pcontent2, style,stylep2,referencia}) => {
  return (
        <div className='CardTestimoniosMobile'>
          <div className='CardImagenMobile'>
            <a href={referencia} target='_black'><img src={img} alt="" className={style} ></img></a>
          </div>
          <div className='CardInformacionTestimonioMobile'>
                <p className={stylep2}>{pcontent2}</p>
          </div>
        </div>
  )
}