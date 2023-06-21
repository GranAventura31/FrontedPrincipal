
import React,{useState} from 'react'
import Modal from 'react-modal'
import {CardsLugarModal2} from '../../../../Desktop/componentsLogueado/ui/CardsLugarModal2/CardLugarModal2'
import {CardsLugarModal3}from '../../../../Desktop/componentsLogueado/ui/CardsLugarModal3/CardsLugarModal3'
import swal from 'sweetalert2';


const openAlert = () =>{
  swal.fire({
    icon: 'error',
    text: 'Por favor Inicie sesión',
    confirmButtonText: 'OK',
    timer: '1300'
  })
}


export const CardsLugarModal = ({img,content, styleH2,BtnModalver,paquetever,precio,valorpaquete, styleImagen,paquete,BtnModalPaquete,contentH2}) => {  
  const [modalIsOpen1, setIsOpen1] = React.useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function closeModal1() {
    setIsOpen1(false);
  }

    return (
    <div className='CardsLugarModal'>
      <img src={img} alt="Cartagena" className={styleImagen}/>
      <div className={content}>
        <h2 className={styleH2}>{contentH2}</h2>
        <h3 className={precio}>{valorpaquete}</h3>
      </div>
        <button className={BtnModalPaquete}  >{paquete}</button> 
        <button className={BtnModalver} onClick={openModal1} >{paquetever}</button>     

        <Modal isOpen={modalIsOpen1}
            onRequestClose={closeModal1}
            contentLabel="Example Modal">
              <h1 className='h1paqueteplaya'>Paquete Playa</h1>
            <div className='containerModal1'>
          <CardsLugarModal img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' styleImagen='imgpaquete' contentH2='Cartagena' styleH2='titulociudad' valorpaquete='Cartagena,un lugar hermoso para vivir con las brisas del mar...vive 2 dias y 1 noche con todo incluido.' precio='descripcion-ciudad'    stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' />
          <CardsLugarModal2 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447771/imagen3_spwtu2.jpg' styleImagen='imgpaquete'contentH2='Barranquilla' styleH2='titulociudad' valorpaquete='Barranquilla,una ciudad magina con una hermosa cultura y bonito folclor...vive 3 dias y 2 noches magicas.' precio='descripcion-ciudad' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
          <CardsLugarModal3 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' styleImagen='imgpaquete'contentH2='Coveñas' styleH2='titulociudad' valorpaquete='Visita la playa blanca y la playa del Frances en los ultimos dias de tu excursión...2 dias y 1 noche pasaras en este lugar' precio='descripcion-ciudad'   stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
        </div>
        </Modal>    
    </div>
  )
}
