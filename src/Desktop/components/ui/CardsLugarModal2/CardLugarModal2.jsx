
import React,{useState} from 'react'
import Modal from 'react-modal'
import { CardsLugarModal } from '../../../../Desktop/components/ui/CardsLugarModal/CardsLugarModal';
import { CardsLugarModal3 } from '../../../../Desktop/components/ui/CardsLugarModal3/CardsLugarModal3';
import swal from 'sweetalert2';
const openAlert = () =>{
  swal.fire({
    icon: 'error',
    text: 'Por favor Inicie sesión',
    confirmButtonText: 'OK',
    timer: '1300'
  })
}




export const CardsLugarModal2 = ({img,content, styleH2,BtnModalver,paquetever,precio,valorpaquete, styleImagen,paquete,BtnModalPaquete,contentH2}) => {  
  const [modalIsOpen2, setIsOpen2] = React.useState(false);

  function openModal2() {
    setIsOpen2(true);
  }

  function closeModal2() {
    setIsOpen2(false);
  }
    return (
    <div className='CardsLugarModal'>
      <img src={img} alt="Cartagena" className={styleImagen}/>
      <div className={content}>
        <h2 className={styleH2}>{contentH2}</h2>
        <h3 className={precio}>{valorpaquete}</h3>
      </div>
        <button className={BtnModalPaquete} onClick={openAlert} >{paquete}</button> 
        <button className={BtnModalver} onClick={openModal2} >{paquetever}</button>     

        <Modal isOpen={modalIsOpen2}
            onRequestClose={closeModal2}
            contentLabel="Example Modal">
              <h1 className='h1paqueteplaya'>Paquete Fiesta</h1>
            <div className='containerModal1'>
          <CardsLugarModal img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' styleImagen='imgpaquete' contentH2='Santa Marta' styleH2='titulociudad' valorpaquete='LLega animando la fiesta! Disfruta de tu primer dia con playa y rumba...vive 2 dias y 1 noche con todo incluido.' precio='descripcion-ciudad'    stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' />
          <CardsLugarModal2 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447771/imagen3_spwtu2.jpg' styleImagen='imgpaquete'contentH2='Medellin' styleH2='titulociudad' valorpaquete='Visita la comuna 13 y el atanasio girardot para terminar con una buena fiesta...vive 3 dias y 2 noches magicas.' precio='descripcion-ciudad' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
          <CardsLugarModal3 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' styleImagen='imgpaquete'contentH2='Barranquilla' styleH2='titulociudad' valorpaquete='Refrescate en tu ultimo dia de viaje y pasa un dia tranquilo tomando sol y plata...2 dias y 1 noche pasaras en este lugar' precio='descripcion-ciudad'   stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
        </div>
        </Modal>       
    </div>
  )
}