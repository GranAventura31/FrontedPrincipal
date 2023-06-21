import React from 'react'
import { Navbar } from '../../ui/Navbar/Navbar'
import { Nombre } from '../../ui/Nombre/Nombre'

export const HeaderA = () => {
  return (
    <header>
      <Nombre content='GranAventura' style='h1'/>
      <Navbar/>
    </header>
  )
}
