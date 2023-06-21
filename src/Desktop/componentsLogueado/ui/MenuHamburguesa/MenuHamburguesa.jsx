import React, {useState} from 'react'
  import Modal from 'react-modal'
  import { TiThMenu } from 'react-icons/ti'
  import { IoClose } from 'react-icons/io5'
 
export const MenuHamburguesa = ()=> {
  // const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  const openModal = (e) => {
      setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return(
    <div className="containerMenu">
      <TiThMenu onClick={openModal} className='abrirModal' />
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="modalMenu">
              <IoClose onClick={closeModal} className='closeModalMenu'/>
            <h1>Menú</h1>
          <div className="menu">
            <div className="menuItem1">Inicio</div>
            <div className="menuItem">Acerca de</div>
            <div className="menuItem">Contacto</div>
          </div>
            </Modal>
    </div>
  )
}