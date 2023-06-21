import React, {Fragment, useEffect, useState, } from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BsTelephoneXFill } from 'react-icons/bs';
import Axios from 'axios';
import swal from 'sweetalert2';
import { Link }  from 'react-router-dom'
import { Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export const InicioSesion = ({user, setUser}) => {

  const [clas, setClas] = useState(false);

  const panel = () =>{
      setClas (true)
  }

  const  putPanel = () =>{
      setClas(false)
  }

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [telefono, setTelefono] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [registroStatus, setRegistroStatus] = useState("");

  const alertaCampos = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }
const register = (e) => {

  const alertaRegistro = () => {
      swal.fire({
        icon: 'success',
        text: 'Registro exitoso',
        confirmButtonText: 'Cool',
        timer: '1300'
      })
  }
  const correoRepetido = () => {
      swal.fire({
        icon: 'error',
        text: 'Correo ya existe',
        confirmButtonText: 'OK',
        // timer: '1300'
      })
  }


  e.preventDefault();
  if (nombre === '' || correo === '' || contrasena === '' || telefono === '') {
    alertaCampos();
  }else{
    Axios.post("http://localhost:5000/api/Register", {
      nombre:  nombre,
      correo: correo,
      contrasena: contrasena,
      telefono: telefono
    }).then((response) => {
      if (response.data.message) {
        setRegistroStatus(response.data.message);
      }else{
        alertaRegistro();
      }
    })
  }
}
 const navigate = useNavigate();
const login = (e) => {
  const alertaLogin = () =>{
    swal.fire({
      icon: 'success',
      text: 'Inicio sesion exitosamente',
      confirmButtonText: 'OK',
    })
  }

  if (correo === '' || contrasena === '') {
    alertaCampos();
  }else{
    e.preventDefault()
    Axios.get("http://localhost:5000/api/Login",{
      correo: correo,
      contrasena: contrasena
    }).then((response)=>{
      if (response.data.message) {
        setLoginStatus(response.data.message);
      }else{
        alertaLogin();
        
      }
      navigate('/hola');
    })
  }
}
  return (
    <Fragment>
      <div className='contenedor'>
      <div className={`wrapper ${clas ? "active" : ""}`}>
        {/* <span className="icon-close">
          <AiOutlineCloseCircle/>
        </span> */}

        <div className="form-box login">
            <h2>Inicio Sesion</h2>
            <form action="#" >
              <div className='input-box'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" name="correo"  onChange={(e) => {setCorreo(e.target.value)}} required />
                <label>Correo</label>
              </div>
              <div className='input-box'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="password" name="contrasena"  onChange={(e) => {setContrasena(e.target.value)}} required/>
                  <label>Contraseña</label>
              </div>
              <div className="remember-forgot">
                  <Link className='recuperacionContraseña' to='/RecuperacionContraseña'><a> ¿Has olvidado tu contraseña? </a></Link>
              </div>  
              <button type='submit' className="btn" onClick={login}> Inicio Sesion </button>
            </form>
              <div className="login-register">
                <p> ¿No tienes una cuenta? <button  className="register-link" onClick={panel}>Registrate aquí</button></p>
              </div>
        </div>

        <div className ={`form-box register ${clas ? "" : "contRegister"}`}>
            <h2>Registrarse</h2>
            <form action="#" >
            <div className='input-box'>
                <span className='icon'>
                  <FaUserCircle/>
                </span>
                <input type="text" name='nombre' onChange={(e) => {setNombre(e.target.value)}} required/>
                
                <label>Nombre y Apellido</label>
            </div>
              <div className='input-box'>
                <span className='icon'>
                <MdEmail />
                </span>
                <input type="email"  name='correo' onChange={(e) => {setCorreo(e.target.value)}} required/>
                <label>Correo</label>
              </div>
              <div className='input-box'>
                <span className='icon'>
                <RiLockPasswordFill/>
                </span>
                <input type="password" name='contrasena' onChange={(e) => {setContrasena(e.target.value)}} required/>
                <label>Contraseña</label>
              </div>
              <div className='input-box'>
                <span className='icon'>
                <BsTelephoneXFill/>
                </span>
                <input type="number" name='telefono' onChange={(e) => {setTelefono(e.target.value)}} required/>
                <label>Telefono</label>
              </div>
              <div className="remember-forgot">
                  <label><input type="checkbox" />Términos y condiciones</label>
              </div>  
              <button type='submit' className="btn" onClick={register}> Registrar </button>
              
            </form>
              <div className="login-register">
                <p> Already have an account? <button onClick={putPanel} className="login-link">Inicio Sesion</button></p>
              </div>
        </div>
      </div>
    </div>
    </Fragment>
    
    
  )
}