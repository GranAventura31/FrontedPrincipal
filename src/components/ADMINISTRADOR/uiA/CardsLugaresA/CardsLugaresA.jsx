import React from 'react'
import { CardsLugarA } from '../CardsLugarA/CardsLugarA'
import { UiCardLugarA } from '../UICardLugarA/UiCardLugarA'

export const CardsLugaresA = () => {
  return (
    <div>
        <div>
          <h1 className='titulolugares'>LUGARES A VISITAR</h1>
          <hr className='hrCardLugaresAVisitar'/>
        </div>
        <div className="containerCards">
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' content='Santa Marta' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443016/cartagena_mhqdmc.jpg' content='Cartagena' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684443476/piscilago_m9tivm.jpg' content='Piscilago' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' content='Volcán del Totumo' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684446043/comuna13_yijssp.jpg' content='Comuna 13 Medellin' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448884/cove%C3%B1as_xzp4zc.jpg' content='Coveñas' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684448921/estadio_metropolitano_z6k8cu.jpg' content='Estadio Metropolitano de Barranquilla' style='Cardtitulociudad'/>
        <CardsLugarA img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447768/imagen2_o1vimc.jpg' content='Piedra del peñol' style='Cardtitulociudad'/>
        <UiCardLugarA content='Conoce más sobre nuestros destinos' to='/Lugares'/>
        </div>
    </div>
  )
}
