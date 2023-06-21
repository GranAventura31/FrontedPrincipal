import React, { useRef, useState } from 'react'
import { Link }  from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Axios from 'axios'
import swal from 'sweetalert2';


export const RecuperacionContraseña = () => {

  const alertaCampos = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }

  const cambioContraseña = () => {
    swal.fire({
      icon: 'success',
      text: 'Cambio de contraseña exitoso',
      confirmButtonText: 'Cool',
      timer: '1300'
    })
}
  const inputEmail = useRef(null)
  const [registroStatus, setRecuperacionStatus] = useState("");
  // const navigate = useNavigate();

  
  const enviar = () => {
    let correo = inputEmail.current.value
    if (correo === '' ) {
      alertaCampos();
  }else{
    Axios.post("http://localhost:5000/api/ActualizarContrasena", {
      correo: correo
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setRecuperacionStatus(response.data.message);
      }else{
      }
    })
  }
}

  return (
    <div className='divRecuperacion'>
        <main className='recuperacionContrasena'>
        <Link className='devolverRecuperacion' to='/Login'><AiOutlineArrowLeft/></Link>
            <form action="" className='formRecuperacion'>
                <Link to='/Login'><img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683235855/niko/perfil_qlghs5.png" alt="" className='imgRecuperacion' /></Link>
                <h2 className='h2Recuperacion'>Recuperación de tu cuenta</h2>
                <p>Por favor ingrese su correo y la contraseña llegara a su correo</p>
                <div className='input-box'>
                    <input ref={inputEmail} type="email" name="correo" required />
                    <label>Correo</label>
                </div>
                <button className='btnRecuperar' onClick={enviar}>Recuperar</button>
            </form>
        </main>
    </div>
  )
}
