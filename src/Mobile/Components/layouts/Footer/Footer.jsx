import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Link }  from 'react-router-dom'

export const Footer = () => {
  return (
    <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>GRAN AVENTURA</h6>
          <p class="text-justify">granaventura.com. <i>Empresa de Viajes. </i> Tenemos 10 años cumpliéndole a los estudiantes del departamento del Quindío. Ofrecemos una excursión que nunca olvidarán, somos garantía de calidad</p>
        </div>
        <div class="col-xs-6 col-md-3">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <Link to='SobreNosotros'>About Us</Link>
            {/* <li><a href="http://scanfcode.com/about/">About Us</a></li> */}
            {/* <li><a href="http://scanfcode.com/contact/">Contact Us</a></li> */}
            {/* <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li> */}
          </ul>
        </div>
      </div>
      <hr/
      >
    </div>
    <div class="container">
      <div class="row">
        {/* <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2017 All Rights Reserved by 
       <a href="#">Scanfcode</a>.
          </p>
        </div> */}

        <div class="col-md-11 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a className='facebook' class="facebook" href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGpPG9zJP_AhWwr4QIHXMpA1IQFnoECAgQAQ&url=https%3A%2F%2Fes-la.facebook.com%2FExcursionesGranAventura%2F&usg=AOvVaw3tIy1XFyMvIRxErXYsbRGT" target='_black'><i class="fa fa-facebook"></i><BsFacebook/></a></li>
            <li><a class="twitter" href="https://mail.google.com/mail/u/0/#inbox" target='_black'><i class="fa fa-twitter"></i><SiGmail/></a></li>
            <li><a class="dribbble" href="https://www.instagram.com/granaventuraexc/?hl=es" target='_black'><i class="fa fa-dribbble"></i><FaInstagram/></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
  )
}