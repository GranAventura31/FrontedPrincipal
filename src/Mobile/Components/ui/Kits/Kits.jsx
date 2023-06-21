import React from 'react'
import { Kit } from '../../../../Mobile/Components/ui/kit/kit'
import { TarjetasKits } from '../../ui/TarjetasKits/TarjetasKits'

export const Kits = () => {
  return (
    <div className='KIT'> 
      <h2 className='tituloKit'>KITS</h2>
      <hr className='hrKit'/>
      <section>
        <Kit/>
      </section>
      <TarjetasKits/>
    </div>
  )
}
