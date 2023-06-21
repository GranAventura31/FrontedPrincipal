import React from 'react'
import { Link }  from 'react-router-dom'

export const Promocion = () => {
  return (
    <div className="div-promocion">
          <h3 className='Mensajeinvitacion'>¡Motivate a vivir el viaje de tu vida!</h3>
          <section className='botonespromocion'>
          <Link className='ov-btn-slide-right' to='/LogIn'>Inicia Sesión</Link>
          <Link className='ov-btn-slide-right' to='/LogIn'>Registrate</Link>
          </section>
    </div>
  )
}
