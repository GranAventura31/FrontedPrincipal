import '../Mobile/Mobile.css';
import { Home } from '../../src/Mobile/Components/pages/Home/Home';
import { Login } from '../Mobile/Components/pages/Login/Login';
import { Routes, Route} from 'react-router-dom'
import { Contenido } from '../Mobile/Components/pages/Contenido/Contenido'
import React, {useEffect, useState, } from 'react'


//admin
// import { HomeA  } from './components/ADMINISTRADOR/pages/HomeA/HomeA.jsx';
// import { ContenidoA } from './components/ADMINISTRADOR/pages/ContenidoA/ContenidoA.jsx'
import { PageLugares } from '../Mobile/Components/pages/PageLugares/PageLugares';
import { RecuperacionDeContraseña } from '../Mobile/Components/layouts/RecuperacionDeContraseña/RecuperacionDeContraseña';
import { Testimonios } from '../Mobile/Components/layouts/Testimonios/Testimonios';
import { SobreNosotrosPage } from '../Mobile/Components/pages/SobreNosotrosPage/SobreNosotrosPage';


export const Mobile = () => {
  const [users, setUsers] = useState([]); 

  useEffect(() => {
    const getUsers = () =>{
      fetch('http://localhost:5000/api')
      .then(res => res.json())
      .then(res => console.log(res))  
    }
    getUsers()
  }, [])

  const [user, setUser] = useState({
    nombre: '',
    correo: '',
    contrasena: '',
    rol: ''
  })
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Lugares' element={<PageLugares/>}/>
      <Route path='/Testimonios' element={<Testimonios/>}/>
      <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/Contenido' element={<Contenido/>}/>
      <Route path='/RecuperacionContraseña' element={<RecuperacionDeContraseña/>}/>
      <Route path='/SobreNosotros' element={<SobreNosotrosPage/>}/>
    </Routes>
    </div>
  )
}
