import React from 'react'
import { Navbar } from '../../../../Desktop/components/ui/Navbar/Navbar'
import { Nombre } from '../../../../Desktop/components/ui/Nombre/Nombre'
import Logo from '../../../../Desktop/components/img/Logo.jpg'
import { Link }  from 'react-router-dom'

export const Header = () => {
  return (
    <header>

      <Link to='/'>
      <img 
      src={Logo}
      className='logo'
      alt="" />
      </Link>

      <Navbar/>
    </header>
  )
}
