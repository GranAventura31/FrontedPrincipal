import React from 'react'
import { Documento } from '../../ui/Documento/Documento'
import { Kits } from '../../ui/Kits/Kits'
import { Header } from '../../layouts/Header/Header'

export const Contenido = () => {
  return (
    <div>
        <Header/>
        <Kits/> 
        <Documento/>
    </div>
  )
}
