import React from 'react'
import Style from './Style12'
import Image1 from '../../Assests/Images/2661180.png'
import Image2 from '../../Assests/Images/9970.png' 
import Image3 from '../../Assests/Images/cities.png'
import Image4 from '../../Assests/Images/791534.png'
import Image5 from '../../Assests/Images/pngtree-round-progress-bar-png-image_4705289.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section12">

            <div className="row">

                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                            <h1>10</h1><span className="Section12-1">Years</span>
                            <div><img src={Image1}/></div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 Top">
                            <h1>190</h1><span className="Section12-2">Team Members</span>
                            <div><img src={Image2}/></div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                            <h1>310</h1><span className="Section12-3">Cities</span>
                            <div><img src={Image3}/></div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 Top">
                            <h1>69</h1><span className="Section12-4">Countries</span>
                            <div><img src={Image4}/></div>
                </div>

            </div>

            <div className="Section12-5"><p>GET IN TOUCH</p></div>
            <div className="Section12-6"><p>Chances are, there’s a reason you visited us today. <b>Goals. Plans. A vision for the future.</b> Why not give us seven minutes to talk about how we can
                 <br/>help you <b>realize them?</b></p></div>

            <div>
                <div className="Section12-7">
                
                        <div className="Section12-8">

                            <div>

                                <img src={Image5} className="Section12-8-1"/>

                            </div>

                            <div className="border12">
                                <p className="Section12-8-2">Learn how The Designers helped Toyota increase conversion by 87%</p>
                                 <p className="Section12-8-3">Read the Case Study</p>
                            </div>
                            
                        </div>

                        <div className="Section12-from">
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>
                            <div className="Section12-from-1"></div>

                        </div>

                </div>  
                

            </div>
            
        </div>
        <Style/>
        </>
    )
}