import React from 'react'
import "./Amenities.css"
import red_check from "../../../assets/red_check.png"
import amenity_img from "../../../assets/amenity-img.jpg"
import nb from "../../../assets/nb.png"
import nike from "../../../assets/nike.png"
import addidas from "../../../assets/adidas.png"
import {Link} from "react-scroll"
const Amenities = () => {
  return (
    <div className = "amenities-container" id="Amenities">
        <div className="amenities-header">
            <span className='stroke-text'>FEATURED</span>
            <span>AMENITIES</span>
        </div>
        
        <div className="left-a">
            <div className='details-1'>
                <div>
                    <img src={red_check} alt=""></img>
                    <span>150+ Club Locations</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Premium Training Equipment</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Personal Training</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Group Fitness Classes</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Spa & Sauna</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Mini bar & Juice Cafes</span>
                </div>
            
            </div>

            <div className='details-2'>
        
                <div>
                    <img src={red_check} alt=""></img>
                    <span>Swimming Pools</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Basketball Courts</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Squash Courts</span>
                </div>

                <div>
                    <img src={red_check} alt=""></img>
                    <span>Kick Boxing & much more</span>
                
                
                </div>
            
            </div>

            <span style = {{
                color: "var(--gray)",
                paddingLeft: "34rem", 
                fontWeight: "normal"
            }}>
                OUR PARTNERS
            </span>

            <div className="partners">
                <img src={nb} alt="" />
                <img src={addidas} alt="" />
                <img src={nike} alt="" />
            </div>


            <div className="amenity-button">
                <buttons className="btn">
                <Link 
                  to = "Membership"
                  spy={true}
                  smooth={true}
                  >Become a Member</Link></buttons>
            </div>


            


        </div>

        <div className="right-a">
        <img src={amenity_img} alt="" className='rope-img'/>
           
        </div>

        



        {/*
        <div className="amenities">
            {amenitiesData.map((amenity,i) =>(
                <div className="amenity" key = {i}>
                    <div className="features">
                        {amenity.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={red_check} alt="" />
                                <span key = {i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                    

                </div>

            ))}
        
        </div>
        <div className="amenities-buttons">
          <buttons className="btn">Become a Member</buttons>
        </div>
       
       <img src={red_check} alt="" className='amenity-image'/>

                        */}

        
       
        


    </div>

    
  )
}

export default Amenities