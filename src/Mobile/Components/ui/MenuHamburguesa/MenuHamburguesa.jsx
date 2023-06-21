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
    <div className="containerMenuMobile">
      <TiThMenu onClick={openModal} className='abrirModalMobile' />
      {/* <div onClick={openModal}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div> */}
      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal" 
            className="modalMenuMobile">
              <IoClose onClick={closeModal} className='closeModalMenuMobile'/>
            <h1>Menú</h1>
          <div className="menu">
          <div className="menuItemMobile1">Inicio</div>
          <div className="menuItemMobile">Acerca de</div>
          <div className="menuItemMobile">Contacto</div>
        </div>
            </Modal>

      {/* {isOpen && (
        <div className="menu">
          <div className="menuItem">Inicio</div>
          <div className="menuItem">Acerca de</div>
          <div className="menuItem">Contacto</div>
        </div>
      )} */}
    </div>
  )
}