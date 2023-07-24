import React from 'react'
import "./Classes.css"
import { classesData } from '../../../data/Home_data/classesData'
import {Link} from "react-scroll"


//home page class section
const Classes = () => {
  return (
    <div className = "class-container" id='Classes'>
        <div className="class-header">
            <div>
            <span>FITNESS </span>
            <span>CLASSES</span>
          </div>
        </div>


        {/* class card*/ }
        <div className='cardlink'>
        <a href="/classes" >
        <div className="classes">
          
            {classesData.map((Class,i) =>(
                <div className="Class" key = {i}>

                    <img src={Class.img} alt="" />
                    <h1>{Class.label}</h1>
                    <span>{Class.text}</span>
                    
                </div>
                

            ))}
          
        </div>
        </a>
        </div>

        <div className="class-btn">
        <buttons className="btn">
        <a href="/classes">View More Classes</a>
        </buttons>
            
        </div>
        


    </div>

    
  )
}

export default Classes