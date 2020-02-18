import React from 'react'
import Style from './Style8'
import Image from '../../Assests/Images/78750604-enterprise.png'
export default()=> {
    return (
        <>
        <div className="container-fluid Section8" style={{padding:'0px'}}>
            <div className="container">

                    <div className="row">

                            <div className="col-lg-6 col-md-6 col-sm-12 Section8-1">
                                    <img src={Image}/>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 Section8-2">
                                    <p>Regardless of your industry, there’s more competition
                                        that ever before.Whether you’re a large enterprise or
                                        a small business, agile development capability is
                                        critical to keeping pace. True agility requires that each
                                        team player is invested in overall success. We know
                                        that there’s no substitute for caring about outcomes.</p>
                                    <button className="Button1">Caso Studios</button> 
                                    <button className="Button2">What We Do</button>   
                            </div>
                    </div>

            </div>
            
        </div>
        <Style/>
        </>
    )
}