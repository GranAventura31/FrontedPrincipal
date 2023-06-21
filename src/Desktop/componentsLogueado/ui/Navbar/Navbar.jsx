import React,{ useState, useEffect } from 'react'
import { Link }  from 'react-router-dom'
import { MenuHamburguesa } from '../../../../Desktop/componentsLogueado/ui/MenuHamburguesa/MenuHamburguesa'
import { BsPersonFill } from 'react-icons/bs'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { MdOutlineExitToApp } from 'react-icons/md'
import Axios from 'axios'

export const Navbar = () => {
  

  const navigate = useNavigate();

  const cerrarSesion = () => {
    Swal.fire({
      icon: 'success',
      text: 'Se cerró la sesión exitosamente',
      confirmButtonText: 'OK',
    })
    navigate('/')
  }

  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);
  console.log(aux[0].Nombre);

  return (
    <nav className='navbarLogueado'>
      <div className='containerNavbar'>
        <Link className='link' to='/HomeLogueado'>Página de inicio</Link>
        <Link className='link' to='/contenidoLogueado'>Contenido</Link>
        <Link className='link' to='/SobreNosotrosLogueado'>Sobre Nosotros</Link>
        <div>
        <Link to='/Perfil'><BsPersonFill color='red' className='iconPerfil'/></Link>
        <p className='pPerfil'>{aux[0].Nombre}</p>
        </div>
        <MdOutlineExitToApp color='red' onClick={cerrarSesion} className='cerrarSesion'/>
      </div>
      <MenuHamburguesa />
    </nav>
  )
}