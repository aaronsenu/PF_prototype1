import React from 'react'
import "./Membership.css"
import { plansData } from '../../../data/Home_data/plansData'
import red_check from "../../../assets/red_check.png"

const Membership = () => {
  return (
    <div className = "plans-container" id='Membership'>
        <div className="plans-header">
            <span>MEMBERSHIP</span>
            <span>START YOUR</span>
            <span>JOURNEY TODAY!</span>
        </div>

        {/* plans card*/ }
        <div className="plans">
            {plansData.map((plan,i) =>(
                <div className="plan" key = {i}>

                    <span>{plan.name}</span>
                    <span>${plan.price}</span>
                    <div className="features">
                        {plan.features.map((feature,i)=>(
                            <div className="feature">
                                <img src={red_check} alt="" />
                                <span key = {i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>
                            View More -&gt;
                        </span>
                    </div>
                    <button className="btn">Get Started</button>


                </div>

            ))}
        </div>


    </div>

    
  )
}

export default Membership