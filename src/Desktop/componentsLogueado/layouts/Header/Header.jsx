import React from 'react'
import { Navbar } from '../../../../Desktop/componentsLogueado/ui/Navbar/Navbar'
import { Nombre } from '../../../../Desktop/componentsLogueado/ui/Nombre/Nombre'

export const Header = () => {
  return (
    <header>
      <Nombre content='GranAventura' style='h1Logueado'/>
      <Navbar/>
    </header>
  )
}
