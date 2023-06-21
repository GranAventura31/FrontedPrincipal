import React from 'react'
import { Reserva } from '../Reserva/Reserva'



export const RESERVAR = () => {
  return (
    <div className='Reserva1Mobile'>
        <div className='ReservaMobile'>
        <h1 className='tituloReserva'>Reservar</h1>
        <hr className='HrReservaMobile'/>
        </div>
        <div>
          <Reserva/>
        </div>
    </div>
  )
}