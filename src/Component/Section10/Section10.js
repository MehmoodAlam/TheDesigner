import React from 'react'
import Style from './Style10'
import Image from '../../Assests/Images/imac.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12 Section10-1">
                                <img src={Image}/>
                            </div>

                            <div className="col-lg-8 col-md-8 col-sm-12 Section10-2">
                                <p>We have worked with The Designers for several projects over the last 4 years<br/>
                                    with consistent positive results. They are knowledgeable, helpful, and<br/>
                                    deadline-driven. We have always appreciated the professional insight they<br/>
                                    bring to every project we work on together and truly feel like they are our<br/>
                                    partner. I would highly recommend them!</p>
                            </div>
                        </div>
                    </div>       
        </div>
        <Style/>
        </>
    )
}