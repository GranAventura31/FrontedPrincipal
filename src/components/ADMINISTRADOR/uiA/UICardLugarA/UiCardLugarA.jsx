import React from 'react'
import { Link }  from 'react-router-dom'

export const UiCardLugarA = ({content, to}) => {
  return (
    <div className='Cardslog'>
        <Link className='Cardslog' to={to}>{content}</Link>
    </div>
  )
}
