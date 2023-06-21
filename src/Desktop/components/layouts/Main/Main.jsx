import React from 'react'
import { Inicio } from '../../../../Desktop/components/ui/Inicio/Inicio'
import { Personal } from '../../../../Desktop/components/ui/Personal/Personal'
import { CardsLugares } from '../../../../Desktop/components/ui/CardsLugares/CardsLugares'
import { Promocion } from "../../../../Desktop/components/ui/Promocion/Promocion";
import { RESERVAR } from '../../../../Desktop/components/ui/RESERVAR/RESERVAR'
import { Contador } from '../../../../Desktop/components/ui/Contador/Contador'
import { Comments } from '../../../../Desktop/components/ui/comments/Comments'
import { Kits } from '../../../../Desktop/components/ui/Kits/Kits'



export const Main = () => {
  return (
    <main>
        <Contador/>
        <RESERVAR/>
        <CardsLugares/>
        <Promocion/>
        <Kits/>
        <Comments/>
        <Personal/>
    </main>
  )
}