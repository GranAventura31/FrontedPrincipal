import React from 'react'
import { Main } from '../../../components/layouts/Main/Main'
import { Footer } from '../../layouts/Footer/Footer'
// import { Header } from '../../layouts/Header/Header'
import { IconWhat } from '../../ui/IconWhat/IconWhat'
import { Header } from '../../layouts/Header/Header'

export const HomeA
 = () => {
  return (
    <div>
        <Header/>
        <IconWhat/>
        <Main/>
        <Footer/>
    </div>
  )
}
