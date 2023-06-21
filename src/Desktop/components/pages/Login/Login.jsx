import React from 'react'
import { InicioSesion} from '../../../../Desktop/components/layouts/InicioSesion/InicioSesion'
import { Header } from '../../../../Desktop/components/layouts/Header/Header'

export const Login = ({user, setUser}) => {
 
  return (
  <div>
    <Header/>
    <InicioSesion user={user} setUser={setUser}/>
  </div>
  )
}
