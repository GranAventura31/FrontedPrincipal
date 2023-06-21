import React from 'react'
import { Inicio } from '../../../../Mobile/Components/ui/Inicio/Inicio'
import { Personal } from '../../../../Mobile/Components/ui/Personal/Personal'
import { CardsLugares } from '../../../../Mobile/Components/ui/CardsLugares/CardsLugares'
import { Testimonioss } from '../../../../Mobile/Components/ui/Testimonioss/Testimonioss'
import { RESERVAR } from '../../../../Mobile/Components/ui/RESERVAR/RESERVAR'


export const Main = () => {
  return (
    <main>
        <Inicio />
        <CardsLugares/>
        <Testimonioss/>
        <RESERVAR/>
        <Personal/>
    </main>
  )
}