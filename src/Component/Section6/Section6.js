import React from 'react'
import Style from './Style6'
import Image from '../../Assests/Images/PinClip.png'
export default()=> {
    return (
        <>
       <div className="container-fluid Section6" style={{padding:'0px'}}>
            <div className="container">

                    <div className="row">

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 Section6-1">
                                    <img src={Image}/>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 Section6-2">
                                    <h2>Web Development</h2>
                                    <p>The Designers  provides custom web design and
                                        development for some of the world's best-known brands.
                                        Our nationally award-winning specialists deliver solutions you
                                        can rely on for business-critical operations. We've helped to
                                        create valuable properties and products that are used, loved
                                        and shared by millions of users.</p>
                                    <button className="Button">Read More</button>    
                            </div>
                    </div>

            </div>
            
        </div>
        <Style/>
        </>
    )
}