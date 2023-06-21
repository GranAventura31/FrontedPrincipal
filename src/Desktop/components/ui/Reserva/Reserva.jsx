import React from 'react'
import { Link }  from 'react-router-dom'

export const Reserva = () => {
  return (
    <div>
      <div className='Reserva'>
        <Link className='tituloReserva' to='/Login'><h1 >¡Inicia sesion para poder reservar!</h1></Link>
      </div>
    </div>
  )
}



// import React, {useState} from 'react'
// import { MdEmail } from 'react-icons/md';
// import { RiLockPasswordFill } from 'react-icons/ri';
// import Modal from 'react-modal'
// import swal from 'sweetalert2';
// import { FormGroup,Input,Label } from 'reactstrap'
// import {AiOutlineArrowLeft} from 'react-icons/ai'
// import Axios from 'axios'

// export const Reserva = () => {

//   const openAlert = () =>{
//     swal.fire({
//       icon: 'error',
//       text: 'Por favor inicie sesión',
//       confirmButtonText: 'OK',
//       timer: '1300' 
//     })
//   }

//   // let Transaccion1 = transaction
//   // let Colegio1 = chooseSchool
//   // console.log(Transaccion1);
//   // console.log(Colegio1);




//   return (
//     <div className="form-box-Reserva">
//             <h1 >¡Reserva aquí!</h1>
//             <form action="#" >
//               <div className='input-box'>
//                 <span className='icon'>
//                   <MdEmail />
//                 </span>
//                 <input type="email" name="email"  required />
//                 <label>Correo</label>
//               </div>
//               <div className='input-box'>
//                   <span className="icon">
//                     <RiLockPasswordFill/>
//                   </span>
//                   <input type="text" name="name"   required/>
//                   <label>Nombre Completo</label>
//               </div>
//               <div className='input-box'>
//                   <span className="icon">
//                     <RiLockPasswordFill/>
//                   </span>
//                   <input type="number" name="phone"   required/>
//                   <label>Teléfono</label>
//               </div>
//               <div>
//               <FormGroup name='school' >
//                 <FormGroup>
//                   <Input type="radio" className='radio1' value='Colegio' />
//                   <Label for='radio1'>colegio</Label>
//                 </FormGroup>
//                 <FormGroup>
//                   <Input type="radio" className='radio2' value='No Colegio' />
//                   <Label for='radio2' className='radio2'>No colegio</Label>
//                 </FormGroup>
//               </FormGroup>
//               </div>
//               <button type='submit' className="btnReserva" onClick={openAlert}> Reservar </button>
//             </form>
//     </div>
//   )
// }