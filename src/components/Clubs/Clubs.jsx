import React from 'react'
import "./Clubs.css"
import {MdLocationPin, MdPhone, MdEmail} from "react-icons/md";
import map from "../../assets/map.png"
import hours from "../../assets/hours.png"
const Clubs = () => {
  return (
    <div className = "clubs-container" id="Clubs">
        <div className="clubs-header">
            <div>
            <span><MdLocationPin/>CLUBS</span>
            <span>NEAR YOU</span>
            


          </div>
        </div>


        <div className='club-info'>
          <div className='infos'>
            <span> <MdLocationPin/> 235 Cooper St. Ottawa, ON K2P 0G2</span>
            <span> <MdEmail/>info.PF@gmail.com</span>
            <span><MdPhone/>(628) 450 - 7828</span>
          
          <div className='images'>
            <img src={map} alt="" />
            <img src={hours} alt="" />
          
          


          </div>
          </div>
          
         
          
          
          


          


        </div>


        


    </div>

    
  )
}

export default Clubs