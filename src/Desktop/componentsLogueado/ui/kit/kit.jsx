import React from 'react'
import swal from 'sweetalert2';
import Modal from 'react-modal'
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";
import {AiOutlineArrowLeft} from 'react-icons/ai'

const stripePromise = loadStripe('pk_test_51NBLwlHRmqMvRqXdLkSWy4RrSbSVG6StVwK5qFNdM68AkJjwwT0EermDVi3cHWk2FElFvne4G5AtOeLBXmwC1WpV00kLzJATet')

const CheckoutForm =  () => {

	const stripe = useStripe();
	const elements = useElements();

  const reservationAlert = () => {
    swal.fire({
      icon: 'success',
      text: 'Compra exitosa',
      confirmButtonText: 'Cool',
      timer: '1300'
    })
}

	const handleSubmit = async (e) => {
	e.preventDefault();

	const { error, paymentMethod } = await stripe.createPaymentMethod({
		type: 'card',
		card: elements.getElement(CardElement)
	})

	if (!error) {
		const { id } = paymentMethod;

		try {
		const { data } = await axios.post("http://localhost:5000/api/checkout", {
			id,
			amount: 50000,
		});
    reservationAlert();
		console.log(data);
		} catch (error) {
		console.log(error);
		}
		elements.getElement(CardElement).clear()
		}
	}



		return <form onSubmit={handleSubmit} className="cradCompra">
			<div className='divImgCompra'>
			<img className='imgCiudadCompra' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683229573/niko/fiesta_excursion_fmfb4a.webp" alt=""></img>
			<CardElement className='tarjeta'/>
        <div className='textoCompra'>
          <p>-Pintucaritas</p>
          <p>-Camisa Neon</p>
          <p>-Camisa Super Heroe</p>
          <p>-Gorras gran Aventura</p>
          <p>-Espuma</p>
          <p>-Barras Neon</p>
          <p>-Tula</p>
          <p>-Collar Hawaiano</p>
        </div>
      </div>
      <h3 className='precioCompra'>Precio del Kit: 50.000$</h3>
			<button className='btnConfirmCompra'>Comprar</button>
		</form>
}

export const Kit = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }




  return (
    <div className='Kits'>
        <div className='divImgKit'>
          <img className='imagenkit' src="https://res.cloudinary.com/dlohqvzri/image/upload/v1683229573/niko/fiesta_excursion_fmfb4a.webp" alt="" />  
        </div>
        <div className='kit'>
          <h1 className='nombrekit'>Kit especial de Gran Aventura</h1>
          <p className='desckit'>Este es el kit que brinda Gran Aventura para nuestros excursionistas.</p>
          <p className='preciokit'>$500.000</p>
          <button className='btnComprar' onClick={openModal}>Comprar</button>
        </div>
        <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal" className="modalCompra">
          <Elements stripe={stripePromise} >
              <AiOutlineArrowLeft className='devolverCompra' onClick={closeModal}/>
              <div className='tituloCompraKit'>
                <h1 className='h1Compra'>Compra Kit</h1>
                <hr className='hrCompraKit'/>
              </div>
            <div className="bodyCompra">
              <div className="cardCompra">
                <div>
                  <CheckoutForm/>
                </div>
              </div>
            </div>
          </Elements>
        </Modal>
    </div>
  )
}
