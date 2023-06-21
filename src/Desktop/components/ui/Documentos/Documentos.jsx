import React from 'react'
import swal from 'sweetalert2';


export const Documentos = () => {

  const openAlert = () =>{
    swal.fire({
      icon: 'error',
      text: 'Por favor inicie sesion',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }
  
  return (
    <div className='documentos'>
        <div className='descargas'>
            <h2 className='titulopermiso'>Acta de Compromiso</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
        <div className='descargas'>
            <h2 className='titulopermiso'>Carta Notaria</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
        <div className='descargas'>
            <h2 className='titulopermiso'>Paz y Salvo</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
        <div className='descargas'>
            <h2 className='titulospermiso'>Contrato</h2>
            <hr className='barrita'/>
            <button className='descarga' onClick={openAlert}>Descargar</button>
        </div>
    </div>
  )
}
