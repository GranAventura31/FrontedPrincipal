import React from 'react'
import { Inicio } from '../../../../Desktop/componentsLogueado/ui/Inicio/Inicio'
import { Personal } from '../../../../Desktop/componentsLogueado/ui/Personal/Personal'
import { CardsLugares } from '../../../../Desktop/componentsLogueado/ui/CardsLugares/CardsLugares'
import { RESERVAR } from '../../../../Desktop/componentsLogueado/ui/RESERVAR/RESERVAR'
import {Comments} from '../../../../Desktop/componentsLogueado/ui/comments/Comments'
import {Contador} from '../../../../Desktop/componentsLogueado/ui/Contador/Contador'


export const Main = () => {
  return (
    <main>
        {/* <Inicio /> */}
        <Contador/>
        <RESERVAR/>
        <CardsLugares/>
        <Comments/>
        <Personal/>
    </main>
  )
}