import React from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';

export const ReservaA = () => {
  return (
    <div className="form-box-Reserva">
            <h1 >¡Reserva aqui!</h1>
            <form action="#" >
              <div className='input-box'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" name="correo" required />
                <label>Correo</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" name="contrasena" required/>
                  <label>Nombre Completo</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" name="contrasena" required/>
                  <label>Telefono</label>
              </div>
              <div>
                <label htmlFor="">
                  <field type='radio' name='nombre' value='Colegio'/>Colegio
                </label>
                <label htmlFor="">
                  <field type='radio' name='nombre' value='PersonaDelComun'/>Persona del Comun
                </label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" name="contrasena" required/>
                  <label>Colegio o persona del comun</label>
              </div>
              
              <button type='submit' className="btnReserva"> Reservar </button>
            </form>
    </div>
  )
}