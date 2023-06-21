import React from 'react'
import { InicioSesion} from '../../../../Desktop/componentsLogueado/layouts/InicioSesion/InicioSesion'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header'

export const Login = ({user, setUser}) => {
 
  return (
  <div>
    <Header/>
    <InicioSesion user={user} setUser={setUser}/>
  </div>
  )
}
