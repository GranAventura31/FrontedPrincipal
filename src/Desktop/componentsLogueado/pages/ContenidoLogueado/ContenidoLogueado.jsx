import React from 'react'
import { Documento } from '../../../../Desktop/componentsLogueado/ui/Documento/Documento'
import { Kits } from '../../../../Desktop/componentsLogueado/ui/Kits/Kits'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'
import { Footer } from '../../../../Desktop/componentsLogueado/layouts/Footer/Footer'
import { SubirArchivos } from '../../../../Desktop/componentsLogueado/ui/SubirArchivos/SubirArchivos'
import { CarritoCompras } from '../../../../Desktop/componentsLogueado/ui/CarritoCompras/CarritoCompras'

export const ContenidoLogueado = () => {
  return (
    <div>
        <Header/>
        {/* <Kits/>  */}
        <CarritoCompras/>
        <Documento/>
        <SubirArchivos/>
        <Footer/>
    </div>
  )
}
