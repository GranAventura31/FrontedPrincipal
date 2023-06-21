import React from 'react'
import { Link }  from 'react-router-dom'

export const Nombre = ({style,content}) => {
  return (
    <div>
      <Link className='TituloGranA'  to='/HomeLogueado'><h1 className={style}>{content}</h1></Link>   
    </div>
  )
}
