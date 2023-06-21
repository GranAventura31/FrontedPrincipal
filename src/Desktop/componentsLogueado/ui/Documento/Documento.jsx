import React from 'react'
import { Documentos } from '../../../../Desktop/componentsLogueado/ui/Documentos/Documentos'

export const Documento = () => {
  return (
    <div className='documento'>
      <h1 className='titulodocumentos'>¡Descarga tus documentos!</h1>
      <hr className='hrDocumento'/>
      <Documentos/>
    </div>
  )
}
