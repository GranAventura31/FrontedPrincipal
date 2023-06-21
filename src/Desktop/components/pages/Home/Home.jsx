import React from 'react'
import { Main } from '../../../../Desktop/components/layouts/Main/Main'
import { Footer } from '../../../../Desktop/components/layouts/Footer/Footer'
import { IconWhat } from '../../../../Desktop/components/ui/IconWhat/IconWhat'
import { Header } from '../../../../Desktop/components/layouts/Header/Header'

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
