import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {SiGmail} from 'react-icons/si'
import { Link }  from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
      <div class="footer-basic">
            <div class="social">
              <a href="https://www.instagram.com/granaventuraexc/?hl=es"><i class="icon ion-social-instagram"></i><FaInstagram/></a>
              <a href="https://mail.google.com/mail/u/0/#inbox"><i class="icon ion-social-twitter"></i><SiGmail/></a>
              <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjGpPG9zJP_AhWwr4QIHXMpA1IQFnoECAgQAQ&url=https%3A%2F%2Fes-la.facebook.com%2FExcursionesGranAventura%2F&usg=AOvVaw3tIy1XFyMvIRxErXYsbRGT"><i class="icon ion-social-facebook"></i><BsFacebook/></a>
            </div>
            <ul class="list-inline">
                {/* <li class="list-inline-item"><a href="#">Home</a></li> */}
                <Link className='list-inline-item' to='/'>Home</Link>
                <li class="list-inline-item"><Link className='list-inline-item' to='/contenido'>contenido</Link></li>
                <li class="list-inline-item"><Link className='list-inline-item' to='/SobreNosotros'>About</Link></li>
                <li class="list-inline-item"><Link className='list-inline-item' to='/LogIn'>Login/Register</Link></li>
            </ul>
            <p class="copyright">Company Name © 2018</p>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </div>  
    </footer>

  )
}