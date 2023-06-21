import React from 'react'
import { Documentos } from '../../../../Desktop/components/ui/Documentos/Documentos'

export const Documento = () => {
  return (
    <div className='documento'>
      <h1 className='titulodocumentos'>Descarga aquí tus Documentos</h1>
      <hr className='hrDocumento'/>
      <Documentos/>
    </div>
  )
}
