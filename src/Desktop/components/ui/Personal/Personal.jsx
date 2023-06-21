import React from 'react'
import { Persona } from '../../../../Desktop/components/ui/Persona/Persona'

export const Personal = () => {
  return (
    <div className='personal'>
        <h1 className='titulopersonas'>Nuestro Personal</h1>
        <hr className='hrPersonal'/>
        <Persona/>
    </div>
  )
}
