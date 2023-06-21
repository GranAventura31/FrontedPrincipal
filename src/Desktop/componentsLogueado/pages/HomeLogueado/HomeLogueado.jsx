import React from 'react'
import { Main } from '../../../../Desktop/componentsLogueado/layouts/Main/Main'
import { Footer } from '../../../../Desktop/componentsLogueado/layouts/Footer/Footer'
import { IconWhat } from '../../../../Desktop/componentsLogueado/ui/IconWhat/IconWhat'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'

export const HomeLogueado = () => {
  return (
    <div>
        <Header/>
        <IconWhat/>
        <Main/>
        <Footer/>
    </div>
  )
}
