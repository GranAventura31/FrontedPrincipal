import React from 'react'
import { Testimonio } from '../../../../Desktop/componentsLogueado/ui/Testimonio/Testimonio'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'

export const Testimonios = () => {
  return (
    <div>
      <Header />
      <div>
      <h1 className='titulolugares'>Testimonios</h1>
      </div>
      <div className='DivCardTestimonios'>
      <Testimonio styleh1='CardtituloTestimonio' pcontent='@Antony123' stylep='Cardparrafotestimonios' style='TestimonioPagina' content='Antony Rosales' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' />
      <Testimonio content='@sebastian_zapata09' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      <Testimonio content='@nikorosale_15' img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684431234/playa_blanca_ilzsdy.jpg'/>
      </div>
    </div>
  )
}
