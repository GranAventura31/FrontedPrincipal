import React from 'react'
import { CardsLugarModal } from '../../../../Desktop/components/ui/CardsLugarModal/CardsLugarModal'
import { CardsLugarModal2 } from '../../../../Desktop/components/ui/CardsLugarModal2/CardLugarModal2';
import { CardsLugarModal3 } from '../../../../Desktop/components/ui/CardsLugarModal3/CardsLugarModal3';

export const CardsLugares = () => {
  return (
    <div className='containerCards1'>
        <div>
          <h1 className='titulolugares'>¡Conoce nuestros paquetes!</h1>
          <hr className='hrCardLugaresAVisitar'/>
        </div>
        <div className='containerModal'>
          <CardsLugarModal img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' styleImagen='imgpaquete' contentH2='Paquete Playa' styleH2='titulopaquete' valorpaquete='$1´000.000' precio='preciopaquete' BtnModalPaquete='btnPaqueteModal' BtnModalver='Botonver'  paquete='¡Lo quiero ya!' paquetever='Ver mas' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' />
          <CardsLugarModal2 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447771/imagen3_spwtu2.jpg' styleImagen='imgpaquete'contentH2='Paquete Fiesta' styleH2='titulopaquete' valorpaquete='$800.000' precio='preciopaquete'BtnModalPaquete='btnPaqueteModal' BtnModalver='Botonver'paquete='¡Lo quiero ya!' paquetever='Ver mas' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
          <CardsLugarModal3 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' styleImagen='imgpaquete'contentH2='Paquete Familia' styleH2='titulopaquete' valorpaquete='$1´100.000' precio='preciopaquete' BtnModalPaquete='btnPaqueteModal' BtnModalver='Botonver' paquete='¡Lo quiero ya!' paquetever='Ver mas' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
        </div>
      </div>
  )
}
