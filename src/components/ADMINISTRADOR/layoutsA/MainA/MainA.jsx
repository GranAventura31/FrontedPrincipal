import React from 'react'
import { Inicio } from '../../ui/Inicio/Inicio'
import { Personal } from '../../ui/Personal/Personal'
import { CardsLugares } from '../../ui/CardsLugares/CardsLugares'
import { Testimonioss } from '../../ui/Testimonioss/Testimonioss'
import { RESERVAR } from '../../ui/RESERVAR/RESERVAR'


export const MainA = () => {
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