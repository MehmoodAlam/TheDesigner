import React from 'react'
import Style from './Style11'
import Images from '../../Assests/Images/epay.jpg'
import Image1 from '../../Assests/Images/ABC.png'
import Image2 from '../../Assests/Images/crypto.png'
import Image3 from '../../Assests/Images/epay.png'
import Image4 from '../../Assests/Images/epy2.png'
import Image5 from '../../Assests/Images/98c8ee2476c8f10abc59e24f2203dd23.png'
import Image6 from '../../Assests/Images/redsqware-furbabytracker-mobileapp-caseheader3.png'
import Image7 from '../../Assests/Images/redsqware-litecure-enterprise-headlesslaravel-caseheader.png'
import Image8 from '../../Assests/Images/redsqware-scte-dashboard-app-v2.png'
import Image9 from '../../Assests/Images/redsqware-arris-b2c-website-mobileapp-header.png'
import Image10 from '../../Assests/Images/Web 1920 – 1.png'
import Image11 from '../../Assests/Images/Rohani Jwellers DB_V1.png'
import Image12 from '../../Assests/Images/The-Designers_Homepage section.png'
import Image13 from '../../Assests/Images/neon-touches-08.png'

export default()=> {
    return (
        <>
        <div className="container-fluid Section11">

                <div className="container Section11-1">
                    <p className="p1">Selected Works</p>

                    <div className="Section11-1-1">
                                <div className="p2"><p>Client Stories</p></div>
                                <div className="p3"><p>Project Archieve</p></div>
                    </div>

                </div>
                <div className="container-fluid Section11-2">
                    <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Images} className="Images"/>
                                <img src={Image1} className="Image1"/>
                                <img src={Image2} className="Image2"/>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                <img src={Image3} className="Image3"/>
                                <img src={Image4} className="Image4"/>
                                <img src={Image5} className="Image5"/>

                            </div>
                    </div>

                            <div className="row">

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image6} className="Image6"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image7} className="Image7"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image8} className="Image8"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image9} className="Image9"/>
                                </div>

                            </div>
                            <div className="row">

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image10} className="Image10"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image11} className="Image11"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image12} className="Image12"/>
                                </div>

                                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-6">
                                        <img src={Image13} className="Image13"/>
                                </div>

                            </div>
                </div>
    </div>
        <Style/>
        </>
    )
}