import React from "react";
import Logo from "../assets/LogoBesameMucho.png";
import "../stylesheets/MainPage.css"



export function MainPage(){
    return(

        <div className="container-MainPage">

      

        <img className="logo-image"  src={Logo}   alt="LogoBesameMucho"/>

        

        </div>
    )
}

export default MainPage;