import React from 'react'
import { Link }  from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'


export const RecuperacionContraseña = () => {
  return (
    <div className='divRecuperacion'>
        <main className='recuperacionContrasena'>
        <Link className='devolverRecuperacion' to='/Login'><AiOutlineArrowLeft/></Link>
            <form action="" className='formRecuperacion'>
                <Link to='/Login'><img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683235855/niko/perfil_qlghs5.png" alt="" className='imgRecuperacion' /></Link>
                <h2 className='h2Recuperacion'>Recuperación de tu cuenta</h2>
                <p>Por favor ingrese su correo y la contraseña llegara a su correo</p>
                <div className='input-box'>
                    <input type="email" name="correo" required />
                    <label>Correo</label>
                </div>
                <button className='btnRecuperar'>Recuperar</button>
            </form>
        </main>
    </div>
  )
}
