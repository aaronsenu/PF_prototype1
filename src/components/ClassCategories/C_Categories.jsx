import React from 'react'
import "./C_Categories.css"
import cardio from "../../assets/cardio.png";
import cycling from "../../assets/cycling.png";
import strength from "../../assets/strength.png";
import yoga from "../../assets/yoga.png";
import dance from "../../assets/dance.jpeg";
import pool from "../../assets/pool.jpeg";

const C_Categories = () => {
  return (
    <div className = "category-container" id="Category">
        <div className="category-header">
            <div>
            <span>CLASS</span>
            <span>CATEGORIES</span>
            


          </div>
        </div>


       <div className='categories'>
        <div className='row'>
            <div className='category'>
                <img src={strength} alt="" />
                <h1>STRENGTH</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                <div className='classlink'>
                <a href="/classes/strength"><buttons className="btn">Explore Classes</buttons></a>
                </div>
                </div>
                
            </div>

            <div className='category'>
                <img src={cardio} alt="" />
                <h1>CARDIO</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                <div className='classlink'>
                <a href="/classes/cardio"><buttons className="btn">Explore Classes</buttons></a>
                </div>                
                </div>
            
            </div>
        </div>

        <div className='row'>
            <div className='category'>
                <img src={cycling} alt="" />
                <h1>CYCLING</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                <div className='classlink'>
                <a href="/classes/cycling"><buttons className="btn">Explore Classes</buttons></a>
                </div>            
                </div>
            
            </div>

            <div className='category'>
                <img src={yoga} alt="" />
                <h1>MIND & BODY</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                <div className='classlink'>
                <a href="/classes/mb"><buttons className="btn">Explore Classes</buttons></a>
                </div>                
                </div>
            </div>
        </div>


        <div className='row'>
            <div className='category'>
                <img src={dance} alt="" />
                <h1>DANCE</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                
                <div className='classlink'>
                <a href="/classes/dance"><buttons className="btn">Explore Classes</buttons></a>
                </div>               
                 </div>
            </div>

            <div className='category'>
                <img src={pool} alt="" />
                <h1>AQUA</h1>
                <span>Our energetic Cardio Classes work your entire body and get your heart pumping. Get motivated, push past your limits and torch calories with a wide variety of endurance-building classes.</span>
                <div className="class-button">
                <div className='classlink'>
                <a href="/classes/aqua"><buttons className="btn">Explore Classes</buttons></a>
                </div>            
                </div>
            </div>
        </div>

        



       </div>

        








        


    </div>

    
  )
}

export default C_Categories