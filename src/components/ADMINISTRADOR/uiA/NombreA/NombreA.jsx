import React from 'react'
import { Link }  from 'react-router-dom'

export const NombreA = ({style,content}) => {
  return (
    <div>
      <Link className='TituloGranA'  to='/'><h1 className={style}>{content}</h1></Link>   
    </div>
  )
}
