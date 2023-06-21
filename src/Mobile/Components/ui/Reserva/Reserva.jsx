import React, {useState} from 'react'
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import Modal from 'react-modal'
import swal from 'sweetalert2';
import { FormGroup,Input,Label } from 'reactstrap'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import Axios from 'axios'

export const Reserva = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [phone, setPhone] = useState("");
  const [pay, setPay] = useState("");
  const [chooseSchool, setChooseSchool] = useState()
  const [transaction, setTransaction] = useState()
  const [reservationstatus, setReservationStatus] = useState()

  
  const ChangeRadioSchool=e=>{
    setChooseSchool(e.target.value)
  }

  const changeRadioTransaction=e=>{
    setTransaction(e.target.value)
  }
  

  const fieldAlert = () =>{
    swal.fire({
      icon: 'error',
      text: 'Algún Campo esta vacío',
      confirmButtonText: 'OK',
      timer: '1300' 
    })
  }
  
  const reservationAlert = () => {
    swal.fire({
      icon: 'success',
      text: 'Registro exitoso',
      confirmButtonText: 'Cool',
      timer: '1300'
    })
}

  const openModal = (e) => {
    e.preventDefault()
    if (name === '' || email === ''  || phone === '' || school === '') {
      fieldAlert();
    }else{
      setIsOpen(true);
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  // let Transaccion1 = transaction
  // let Colegio1 = chooseSchool
  // console.log(Transaccion1);
  // console.log(Colegio1);


  const booking = (e) =>{
    e.preventDefault();
  if (pay === '') {
    fieldAlert();
  }else{
    Axios.post("http://localhost:5000/api/reserva", {
      name:  name,
      email: email,
      phone: phone,
      school: school,
      pay: pay
    }).then((response) => {
      if (response.data.message) {
        setReservationStatus(response.data.message);
      }else{
        reservationAlert();
      }
    })
  }}

  return (
    <div className="form-box-ReservaMobile">
            <h1 className='ReservaMobile'>¡Reserva aquí!</h1>
            <form action="#" >
              <div className='input-boxMobile'>
                <span className='icon'>
                  <MdEmail />
                </span>
                <input type="email" name="email" onChange={(e) => {setEmail(e.target.value)}}  required />
                <label>Correo</label>
              </div>
              <div className='input-boxMobile'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="text" name="name" onChange={(e) => {setName(e.target.value)}}  required/>
                  <label>Nombre Completo</label>
              </div>
              <div className='input-boxMobile'>
                  <span className="icon">
                    <RiLockPasswordFill/>
                  </span>
                  <input type="number" name="phone" onChange={(e) => {setPhone(e.target.value)}}  required/>
                  <label>Teléfono</label>
              </div>
              <div>
              <FormGroup name='school' onChange={(e)=>{setSchool(e.target.value)}}>
                <FormGroup className='formGroupMobile'>
                  <Input type="radio" className='radio1' value='Colegio' onChange={ChangeRadioSchool} checked={chooseSchool == 'Colegio' ? true: false}/>
                  <Label for='radio1'>colegio</Label>
                </FormGroup>
                <FormGroup  className='formGroupMobile'>
                  <Input type="radio" className='radio2' value='No Colegio' onChange={ChangeRadioSchool} checked={chooseSchool == 'No Colegio' ? true: false}/>
                  <Label for='radio2' className='radio2'>No colegio</Label>
                </FormGroup>
              </FormGroup>
              </div>
              <button type='submit' className="btnReservaMobile" onClick={openModal}> Reservar </button>
            </form>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="reservaModalMobile">
              <AiOutlineArrowLeft className='devolverModal' onClick={closeModal}/>
              <div className='reservaModal1'>
                <h1 className='h1reservaModal'>¡Gracias por confiar en nosotros!</h1>
                <h2 className='h2reservaModal'>Reserva de la excursión</h2>
                {/* <p className='p1reservaModal'>Este paquete lleva todo lo que les de la gana</p>  */}
                <img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1679598798/niko/cove%C3%B1as_hlcyyb.jpg" alt="" className='imagenReservaModal1'/>
              <FormGroup className='FormGroup' name='pay' onChange={(e) =>{setPay(e.target.value)}}>
                <div className='formGroupBoletas'> 
                  <div className='imgBoletas'>
                      <img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1685743791/boletas_k499s9.jpg" className='imagenBoletas' alt="" />
                  </div>
                  <Label for='boletas1' className='labelBoletas'>Se daran 2 paquetes de boletas, si vende el primer paquete de boletas habria comprado la mita del paquete de excursion </Label>
                  <Label for='boletas1' className='labelBoletas2'>Las boletas se entregaran personalmente</Label>
                <FormGroup className='radioBoletas'>
                  <Input type="radio" className='boletas1' value='Boletas' onChange={changeRadioTransaction} checked={transaction == 'Boletas' ? true: false}/>
                  <Label for='boletas1'>Boletas</Label>
                </FormGroup>
                </div>
                <div className='formGroupTransaccion'> 
                  <div className='imgBoletas'>
                      <img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1685743918/bancolombia_owg4e4.jpg" className='imagentransaccion' alt="" />
                      <img src="https://res.cloudinary.com/dlohqvzri/image/upload/v1685739504/nequi_zrtfvk.webp" className='imagentransaccion' alt="" />
                  </div>
                  <Label for='boletas1' className='labelTransaccion'>Se pagara toda la excursion por medio de transacciones</Label>
                  <Label for='boletas1' className='labelTransaccion2'>Las transaccion la podran hacer a </Label>
                <FormGroup>
                  <Input type="radio" className='transaccion2' value='Transaccion' onChange={changeRadioTransaction} checked={transaction == 'Transaccion' ? true: false}/>
                  <Label for='transaccion2' className='radio2'>Transacción</Label>
                </FormGroup>
                </div>
              </FormGroup>
              <button className='btnReservaTotal' onClick={booking}>Reservar</button>
              </div>
            </Modal>
    </div>
  )
}