import React from 'react'
import { ImWhatsapp } from 'react-icons/im'
import { GrInstagram } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'

export const IconWhat = () => {
  return (
    <div>
        <div>
        <a href="https://api.whatsapp.com/send?phone=3136724966" className='btn-wspMobile' target='_black'>
            <i className='icon-whatsapp'>
                <ImWhatsapp/>
            </i>
        </a>
        </div>
        {/* <div>
        <a href="https://es-la.facebook.com/ExcursionesGranAventura/" className='btn-face' target='_black'>
            <i className='icon-facebook'>
                <ImFacebook/>
            </i>
        </a>
        </div> */}
        {/* <div>
        <a href="https://instagram.com/granaventuraexc?igshid=YmMyMTA2M2Y=" className='btn-insta' target='_black'>
            <i className='icon-instagram'>
                <GrInstagram/>
            </i>
        </a>
        </div> */}
    </div>
  )
}
