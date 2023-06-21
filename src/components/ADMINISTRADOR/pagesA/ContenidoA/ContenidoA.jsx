import React from 'react'
import { Documento } from '../../ui/Documento/Documento'
import { Kits } from '../../ui/Kits/Kits'
import { TarjetasKits } from '../../ui/TarjetasKits/TarjetasKits'
import { Header } from '../../layouts/Header/Header'

export const ContenidoA = () => {
  return (
    <div>
        <Header/>
        <Kits/> 
        <TarjetasKits/>
        <Documento/>
    </div>
  )
}
