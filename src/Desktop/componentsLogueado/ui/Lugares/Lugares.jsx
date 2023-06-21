import React from 'react'
import { Lugar } from '../../../../Desktop/componentsLogueado/ui/Lugar/Lugar'

export const Lugares = () => {
  return (
    <div className='lugares'>
      <h1 className='titulolugaresaVisitar'>LUGARES A VISITAR</h1>
      <hr className='hrLugaresVisitar'/>
      <Lugar/>
    </div>
  )
}