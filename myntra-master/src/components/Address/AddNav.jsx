import React from 'react'
import "./Address.css"
import logo from "../Images/myntra-logo.png"
import image3 from "../Images/image3.png"

export const AddNav = () => {
    return (
        <div id="nav">
            <div>
                <img id="logo"
                    src={logo}
                    alt="" />
            </div>
            <div id="nav-2">
               
                <span>BAG ---------  </span> <span id="blue">
                    <div> ADDRESS &ensp;</div>
                    <div id="blueline"></div>
                </span> <span> --------- PAYMENT</span>
            </div>
            <div id="checkdiv">
                <img src={image3} alt="" />
               
            </div>
        </div>
    )
}

