import React from 'react'
import { InicioSesion} from '../../layouts/InicioSesion/InicioSesion'
import { Header } from '../../layouts/Header/Header'

export const Login = ({user, setUser}) => {
 
  return (
  <div>
    <Header/>
    <InicioSesion user={user} setUser={setUser}/>
  </div>
  )
}
