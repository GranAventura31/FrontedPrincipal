import React from 'react'

export const DocumentosA = () => {
  return (
    <div className='documentos'>
        <div className='descargas'>
            <h2 className='titulospermiso'>Permisos de menores de edad</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./pdf1.pdf" className='descargaDocumento' download=''>Descargar </a></button>
        </div>

        <div className='descargas'>
            <h2 className='titulopermiso'>Permisos de registraduría</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./pdf2.pdf" className='descargaDocumento' download={''}>Descargar </a></button>
        </div>
    </div>
  )
}
