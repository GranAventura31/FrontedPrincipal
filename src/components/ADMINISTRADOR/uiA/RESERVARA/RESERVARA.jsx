import React from 'react'
import { Reserva } from '../Reserva/Reserva'


export const RESERVARA = () => {
  return (
    <div>
        <div className='Reserva'>
        <h1 className='tituloReserva'>Reservar</h1>
        <hr className='HrReserva'/>
        </div>
        <div>
            <Reserva />
        </div>
    </div>
  )
}