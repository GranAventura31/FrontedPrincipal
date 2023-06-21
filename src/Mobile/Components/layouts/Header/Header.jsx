import React from 'react'
import { Navbar } from '../../../../Mobile/Components/ui/Navbar/Navbar'
import { Nombre } from '../../../../Mobile/Components/ui/Nombre/Nombre'

export const Header = () => {
  return (
    <header className='headerMobile'>
      <Nombre content='GranAventura' style='h1'/>
      <Navbar/>
    </header>
  )
}
