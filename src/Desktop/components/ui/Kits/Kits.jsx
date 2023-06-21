import React from 'react'
import { Kit } from '../../../../Desktop/components/ui/kit/kit'
import { TarjetasKits } from '../../../components/ui/TarjetasKits/TarjetasKits'

export const Kits = () => {
  return (
    <div className='KIT'> 
      <h2 className='tituloKit'>Nuestros Accesorios</h2>
      <hr className='hrKit'/>
      <section>
        <Kit/>
      </section>
      <TarjetasKits/>
    </div>
  )
}
