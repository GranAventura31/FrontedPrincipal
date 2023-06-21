
import React,{useState} from 'react'
import Modal from 'react-modal'
import { CardsLugarModal } from '../../../../Desktop/componentsLogueado/ui/CardsLugarModal/CardsLugarModal'
import { CardsLugarModal2 } from '../../../../Desktop/componentsLogueado/ui/CardsLugarModal2/CardLugarModal2';




export const CardsLugarModal3 = ({img,content, styleH2,BtnModalver,paquetever,precio,valorpaquete, styleImagen,paquete,BtnModalPaquete,contentH2}) => {  
  const [modalIsOpen3, setIsOpen3] = React.useState(false);

  function openModal3() {
    setIsOpen3(true);
  }

  function closeModal3() {
    setIsOpen3(false);
  }
    return (
    <div className='CardsLugarModal'>
      <img src={img} alt="Cartagena" className={styleImagen}/>
      <div className={content}>
        <h2 className={styleH2}>{contentH2}</h2>
        <h3 className={precio}>{valorpaquete}</h3>
      </div>
        <button className={BtnModalPaquete} >{paquete}</button> 
        <button className={BtnModalver} onClick={openModal3} >{paquetever}</button>     

        <Modal isOpen={modalIsOpen3}
            onRequestClose={closeModal3}
            contentLabel="Example Modal">
              <h1 className='h1paqueteplaya'>Paquete Familia</h1>
            <div className='containerModal1'>
          <CardsLugarModal img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684445309/santaMarta_xtvqf2.jpg' styleImagen='imgpaquete' contentH2='Barranquilla' styleH2='titulociudad' valorpaquete='Visita la casa de la seleccion colombia de futbol con tus familiares y amigos...vive 2 dias y 1 noche con todo incluido.' precio='descripcion-ciudad'    stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' />
          <CardsLugarModal2 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684447771/imagen3_spwtu2.jpg' styleImagen='imgpaquete'contentH2='Piscilago' styleH2='titulociudad' valorpaquete='Este parque trae todo lo que te gusta,toboganes,piscina y animales...vive 3 dias y 2 noches magicas.' precio='descripcion-ciudad' stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
          <CardsLugarModal3 img='https://res.cloudinary.com/dlohqvzri/image/upload/v1684449303/Volcan_del_totumo_hfiiof.jpg' styleImagen='imgpaquete'contentH2='Parque de las aguas' styleH2='titulociudad' valorpaquete='Refrescate en el parque de las agua en el valle,disfruta de momentosagradables con tu familia...2 dias y 1 noche pasaras en este lugar' precio='descripcion-ciudad'   stylep="textoModal" content='contenidoModal' ranking="rangoModal" price='precioModal' contentP='Partiendo desde Armenia, hasta Cartagena 2 dias 1 noche, santa marta 2 dias 1 noche, barranquilla 1 dia 1 noche'/>
        </div>
        </Modal>   
    </div>
  )
}