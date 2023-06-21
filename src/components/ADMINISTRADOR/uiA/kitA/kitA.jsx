import React from 'react'
// import {AiOutlineArrowLeft} from 'react-icons/ai'
import { Link }  from 'react-router-dom'
import Modal from 'react-modal'
import { loadStripe } from "@stripe/stripe-js"
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import axios from "axios";

const stripePromise = loadStripe('pk_test_51NBLwlHRmqMvRqXdLkSWy4RrSbSVG6StVwK5qFNdM68AkJjwwT0EermDVi3cHWk2FElFvne4G5AtOeLBXmwC1WpV00kLzJATet')

const KitA =  () => {

	const stripe = useStripe();
	const elements = useElements();

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

		console.log(data);
		} catch (error) {
		console.log(error);
		}
		elements.getElement(CardElement).clear()
		}
	}

		return <form onSubmit={handleSubmit} className="cradCompra">
			<CardElement className='tarjeta'/>
			<div className='divImgCompra'>
			<img className='imgCiudadCompra' src="https://f.hubspotusercontent00.net/hubfs/5696451/Torre%20del%20Reloj%20en%20Cartagena%20de%20Indias,%20Colombia.jpg" alt=""></img>
			</div>
			<h3 className='precioCompra'>Price: 50.000$</h3>
			<button className='btnConfirmCompra'>Comprar</button>
		</form>
}

export const Kit = () => {
  let subtitle;

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

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
            <div className="bodyCompra">
              <div className="cardCompra"> 
                <div>
                  <KitA/>
                </div>
              </div>
            </div>
          </Elements>
        </Modal>
    </div>
  )
}
