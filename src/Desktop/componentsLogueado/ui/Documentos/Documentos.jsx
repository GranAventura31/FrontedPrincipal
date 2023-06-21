import React from 'react'

export const Documentos = () => {
  return (
    <div className='documentos'>
        <div className='descargas'>
            <h2 className='titulopermiso'>Acta de Compromiso</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./acta de compromiso.pdf" className='descargaDocumento' download={''}>Descargar </a></button>
        </div>
        <div className='descargas'>
            <h2 className='titulopermiso'>Carta Notaria</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./carta notaria.pdf" className='descargaDocumento' download={''}>Descargar </a></button>

        </div>
        <div className='descargas'>
            <h2 className='titulopermiso'>Paz y Salvo</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./paz y salvo.pdf" className='descargaDocumento' download={''}>Descargar </a></button>

        </div>
        <div className='descargas'>
            <h2 className='titulospermiso'>Contrato</h2>
            <hr className='barrita'/>
            <button className='descarga'><a href="./2023 contrato.pdf" className='descargaDocumento' download={''}>Descargar </a></button>
        </div>
    </div>
  )
}
