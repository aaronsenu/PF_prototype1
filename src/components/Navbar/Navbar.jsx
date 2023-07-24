import React from 'react'
import "./Navbar.css"
import logo2 from "../../assets/logo2.png"
import Home from "../Home/Home"
import Testimonials from "../Clubs/Clubs"
import {Link} from "react-scroll"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">

      <img src={logo2} alt="" className='logo'/>

      <div className="club-name">
          <div>
            <span>PREMIUM </span>
            <span>FITNESS</span>
          </div> 
      </div>

      <ul className='navbar-menu'> {/* links*/}
      <li><a href="/">Home</a></li>
        
      <li><a href="/clubs">Clubs</a></li>

      <li><a href="/classes">Classes</a></li>

      <li><a href="/training">Training</a></li>


      </ul>


      <div className='header-buttons'>
          <button className = "btn">
          <Link 
                  to = "Membership"
                  spy={true}
                  smooth={true}
                  >Become A Member</Link>


          </button>
          <button className = "btn">Login</button>
  </div>     


     
      {/*
      <ul className='navbar-menu'>
     
          
      
      <li>
        <Link 
          activeClass='active'
          to = "/home"
          spy={true}
          smooth={true}
          >Home</Link>
        </li>

      <li>
        <Link 
          to = "Amenities"
          spy={true}
          smooth={true}
          >Amenities</Link>
        </li>
        
        <li>
        <Link 
          to = "Classes"
          spy={true}
          smooth={true}
          >Classes</Link>
        </li>


        <li>
        <Link 
          to = "Trainer"
          spy={true}
          smooth={true}
          >Trainers</Link>
        </li>

        <li>
        <Link 
          to = "Membership"
          spy={true}
          smooth={true}
          >Membership</Link>
        </li>

        <li>
          <Link 
          to = "Testimonials"
          spy={true}
          smooth={true}
          >Testimonials</Link>
        </li>
  




        <div className='navbar-buttons'>
          <button className = "btn">
          <Link 
                  to = "Membership"
                  spy={true}
                  smooth={true}
                  >Become A Member</Link>


          </button>
          <button className = "btn">Login</button> 
        </div>

  </ul>*/}
    
    </nav>
    
  )
}

export default Header