import React from 'react'
import Style from './Style9'
import Image from '../../Assests/Images/1744.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section9" >
            <div className="container">

                    <div className="row" >

                            <div className="col-lg-6 col-md-6 col-sm-12 Section9-1">
                                    <p>We build tech teams. Agile web and application<br/>
                                        development represents both an opportunity and a<br/>
                                        potential risk. The Designer's answers the problem of<br/>
                                        balancing code, cost, and compliance. We identify<br/>
                                        solutions, build teams, and manage delivery to fit the<br/>
                                        precise needs of each customer. We accept 100%<br/>
                                        accountability for the end result of your project.</p>    
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 Section9-2">
                                    <img src={Image}/>
                            </div>
                    </div>

            </div>
            
        </div>
        <Style/>
        </>
    )
}