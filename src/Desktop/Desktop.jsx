import '../index.css';
import { Home } from '../Desktop/components/pages/Home/Home';
import { Login } from '../Desktop/components/pages/Login/Login';
import { Routes, Route} from 'react-router-dom'
import { Contenido } from '../Desktop/components/pages/Contenido/Contenido'
import React, {useEffect, useState, } from 'react'


//admin
// import { HomeA  } from './components/ADMINISTRADOR/pages/HomeA/HomeA.jsx';
// import { ContenidoA } from './components/ADMINISTRADOR/pages/ContenidoA/ContenidoA.jsx'
import { PageLugares } from '../Desktop/components/pages/PageLugares/PageLugares';
import { RecuperacionDeContraseña } from '../Desktop/components/layouts/RecuperacionDeContraseña/RecuperacionDeContraseña';
import { SobreNosotrosPage } from '../Desktop/components/pages/SobreNosotrosPage/SobreNosotrosPage';


// IMPORTACIONES LOGUEADAS
import { HomeLogueado } from '../Desktop/componentsLogueado/pages/HomeLogueado/HomeLogueado'
import { SobreNosotrosPageLogueado } from '../Desktop/componentsLogueado/pages/SobreNosotrosPageLogueado/SobreNosotrosPageLogueado';
import { PageLugaresLogueado } from '../Desktop/componentsLogueado/pages/PageLugaresLogueado/PageLugaresLogueado';
import { ContenidoLogueado } from '../Desktop/componentsLogueado/pages/ContenidoLogueado/ContenidoLogueado'
import { Perfil } from '../../src/Desktop/componentsLogueado/ui/Perfil/Perfil'


export const Desktop = () => {
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
    {/* <div>
    <Routes>
      <Route path='/Administrador' element={<HomeA/>}/>
      <Route path='/ContenidoAdministrador' element={<ContenidoA/>}/>
    </Routes>
    </div> */}
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Lugares' element={<PageLugares/>}/>
      <Route path='/Login' element={<Login user={user} setUser={setUser}/>}/>
      <Route path='/Contenido' element={<Contenido/>}/>
      <Route path='/RecuperacionContraseña' element={<RecuperacionDeContraseña/>}/>
      <Route path='/SobreNosotros' element={<SobreNosotrosPage/>}/>
      {/* RUTAS LOGUEADAS */}
      <Route path='/HomeLogueado' element={<HomeLogueado/>}/>
      <Route path='/ContenidoLogueado' element={<ContenidoLogueado/>}/>
      <Route path='/SobreNosotrosLogueado' element={<SobreNosotrosPageLogueado/>}/>
      <Route path='/Lugares' element={<PageLugaresLogueado/>}/>
      <Route path='/Perfil' element={<Perfil/>}/>
    </Routes>
    </div>
  </div>
  )
}