import React from 'react'
import Style from './Style5'
import Image from '../../Assests/Images/Pinn.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section5" style={{padding:'0px'}}>
            <div className="container">

                    <div className="row section5-3" >

                            <div className="col-lg-6 col-md-6 col-sm-12 Section5-1">
                                    <h2>Mobile Development</h2>
                                    <p>Business, consumer, and beyond. Whether you need<br/>
                                        native, a hybrid app, or are pursuing PWA, The Designer<br/>
                                        delivers. We can help design, spec and build a solution<br/>
                                        that precisely fits your budget and requirements.</p>
                                    <button className="Button">Read More</button>    
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 Section5-2">
                                    <img src={Image}/>
                            </div>
                    </div>

            </div>
            
        </div>
        <Style/>
        </>
    )
}