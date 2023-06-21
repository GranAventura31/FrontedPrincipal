import React,{useState} from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { BsTelephoneXFill } from 'react-icons/bs';
import Axios from 'axios';
import swal from 'sweetalert2';
import Modal from 'react-modal'
import { Header } from '../../../../Desktop/componentsLogueado/layouts/Header/Header';


export const Perfil = () => {
	

const [modalIsOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState(null); // Variable de estado para almacenar los datos del usuario

  const openModal = (e) => {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const storedUserData = localStorage.getItem('datosUsuario');
  const aux = JSON.parse(storedUserData);


	const alertaCampos = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300'
    })
  }

const [nombre, setNombre] = useState("");
const [correo, setCorreo] = useState("");
const [contrasena, setContrasena] = useState("");
const [telefono, setTelefono] = useState("");
// const [CorreoActual, setCorreoActual] = useState("");
const actualizar = (e) => {
  e.preventDefault();
  if (nombre === '' || correo === '' || contrasena === '' || telefono === '') {
    alertaCampos();
  } else {
    Axios.post("http://localhost:5000/api/actualizarPerfil", {
      nombre: nombre,
	  correo: correo,
	  contrasena: contrasena,
	  telefono: telefono,
	  CorreoActual: aux[0].Correo
    }).then((response) => {
      if (response.status === 200) {
        swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Usuario actualizado exitosamente'
        });
      }
    }).catch((error) => {
      swal.fire({
        icon: 'error',
        title: 'Error',
        text: ''
      });
      console.log(error);
    });
  }
};


const login = (e) => {
  console.log(correo);
  console.log(contrasena);

    e.preventDefault();
    Axios.post("http://localhost:5000/api/Login", {
    Correo: correo
    }).then((response) => {
console.log(response.data);
      if (response.status === 200) {
        localStorage.setItem('datosUsuario', JSON.stringify(response.data));
        swal.fire('Éxito', 'Inicio de sesión exitoso', 'success')
      }
    }).catch((error) => {
      console.error(error);
    });
  
}

return (
<div>
    <Header/>
    <h2 className='tituloperfil'>Perfil</h2>
  <div className="muestraPerfil">
		<div className='formPerfil'>
		{/* <div className='imgPerfil'>
			<img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1685727011/guia_qwhgkk.jpg" alt="" className='imgP'/>
		</div> */}
            <div className='input-boxP'>               
                <label className='labelPerfil'>Nombre:<p className='pPerfil'>{aux[0].Nombre}</p></label>
            </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Correo:<p className='pPerfil'>{aux[0].Correo}</p> </label>
              </div>
              <div className='input-boxP'>
                <label className='labelPerfil'>Telefono:<p className='pPerfil'>{aux[0].Telefono}</p></label>
              </div>
              <div className='input-boxP'>
                <labe className='labelPerfil'l>Rol:<p className='pPerfil'>{aux[0].Rol}</p></labe>
              </div>
              <button type='submit' className="btn-editar" onClick={openModal}> Editar </button>
		</div>
		<Modal className='actualizarPerfil' isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal">
				<form action="#" >
            <div className='input-boxPP'>
                <span className='icon'>
                  <FaUserCircle/>
                </span>
                <input type="text" name='nombre' onChange={(e) => {setNombre(e.target.value)}} required/>
                
                <label>Nombre y Apellido</label>
            </div>
              <div className='input-boxPP'>
                <span className='icon'>
                <MdEmail />
                </span>
                <input type="email"  name='correo' onChange={(e) => {setCorreo(e.target.value)}} required/>
                <label>Correo</label>
              </div>
              <div className='input-boxPP'>
                <span className='icon'>
                <RiLockPasswordFill/>
                </span>
                <input minLength={8} type="password" name='contrasena' onChange={(e) => {setContrasena(e.target.value)}} required/>
                <label>Contraseña</label>
              </div>
              <div className='input-boxPP'>
                <span className='icon'>
                <BsTelephoneXFill/>
                </span>
                <input type="number" name='telefono' onChange={(e) => {setTelefono(e.target.value)}} required/>
                <label>Telefono</label>
              </div>
              <button className="btn-editar" onClick={actualizar}>Actualizar</button>
              
            </form>
			</Modal>
	</div>
  </div>
  )
}
