import React from 'react'
import Style from './Style1'
import '../../Assests/Style/Style.css'
import {Link} from 'react-router-dom'
import Image1 from '../../Assests/Images/thedesigners-logo.png'
import Image2 from '../../Assests/Images/imac desgn.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section1">
            <div className="row">
                    <div className="container Section1-1">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <img src={Image1} className="img-responsive"/>
                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-12 Section1-2">
                                <ul>
                                  <Link to={"/signup"}><li>What We Do</li></Link>
                                    <li>Case Studies</li>
                                    <li>Our Blog</li>
                                    <li>Healthcare</li>
                                    <li>Contact Us</li>             
                                </ul>
                            </div>
                    </div>
            </div>                  
                <div className="container Section1-3" style={{padding:'0px'}}>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 Section1-3-1">
                            <p className="p1">We Are Creative Agency,<br/>Create And Make Your Dream</p>
                            <p className="p2">Maximize Opportunity Minimize Risk</p>
                            <p className="p3">Your Proven Partner For Enterprise Development Outsourcing.</p>
                        </div>
                    </div>
                    

                </div>


                    <div className="Section1-3-2"><img src={Image2} /></div>

        </div>

        

        <Style/>
        </>
    )
}
