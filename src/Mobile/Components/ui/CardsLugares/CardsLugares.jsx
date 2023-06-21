import React from 'react'
import { CardsLugar } from '../../../../Mobile/Components/ui/CardsLugar/CardsLugar'
import { UiCardLugar } from '../../../../Mobile/Components/ui/UICardLugar/UiCardLugar'
import { CardsLugarModal } from '../../../../Mobile/Components/ui/CardsLugarModal/CardsLugarModal'


export const CardsLugares = () => {
  return (
    <div className='containerCardsMobile'>
        <div>
          <h1 className='titulolugaresMobile'>LUGARES A VISITAR</h1>
          <hr className='hrCardLugaresAVisitaM'/>
        </div>
        <div className="containerCardsM">
          <CardsLugarModal/>
        </div>
    </div>
  )
}
