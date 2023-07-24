import React from 'react'
import "./Dance.css"
import dance from "../../../assets/dance.jpeg"

const Dance = () => {
  return (
    <div className = "s-container">
        <div className='s-category'>
            <h1>DANCE</h1>
            <img src={dance} alt="" />
        </div>
        <div className="s-header">
            <div>
            <span>EXPLORE</span>
            <span>CLASSES</span>
          </div>
        </div>

        <h5>Intensity Levels</h5>
        <div className="intensity-button">
            <buttons className="btn">Low</buttons>
            <buttons className="btn">Medium</buttons>
            <buttons className="btn">High</buttons>
        </div>

        


        <div className='categories'>
                <div className='row'>
                    <div className='category'>
                        
                        
                        <h1>ZUMBA CLASS</h1>
                        <span>MEDIUM/HIGH INTENSITY</span>
                        <span>This CORE Strength class will challenge your entire core front to back, top to bottom. Sure to ignite a fire in your belly this class will focus on functional movement to improve power, strength and stabilization preparing the body for daily tasks.</span>
                        <div className="class-button">
                        <buttons className="btn">View Schedule</buttons>
                        </div>         
                    </div>

                    <div className='category'>
                    
                       
                        <h1>Dance Challenge</h1>
                        <span>LOW/MEDIUM INTENSITY</span>
                        <span>Define and strengthen your body in this muscle conditioning class. Instructors will take you through a series of exercises and provide options for all fitness levels. As these classes vary at each location, please reach out to the Club for more information.</span>
                        <div className="class-button">
                        <buttons className="btn">View Schedule</buttons>
                    </div>         
                </div>
            </div>
        </div>
        
    </div>


    
  )
}

export default Dance