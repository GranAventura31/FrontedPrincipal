import React from 'react'
import { Main } from '../../../../Mobile/Components/layouts/Main/Main'
import { Footer } from '../../layouts/Footer/Footer'
// import { Header } from '../../layouts/Header/Header'
import { IconWhat } from '../../ui/IconWhat/IconWhat'
import { Header } from '../../layouts/Header/Header'

export const Home = () => {
  return (
    <div>
        <Header/>
        <IconWhat/>
        <Main/>
        <Footer/>
    </div>
  )
}
