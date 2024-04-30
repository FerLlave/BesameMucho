import React from "react";
import Logo from "../assets/LogoBesameMucho.png";
import "../stylesheets/MainPage.css";
import TitlesAnimation from "./TitlesAnimation";




function MainPage(){

       

    return(

        <div className="container-MainPage">

      
        <img className="logo-image"  src={Logo}   alt="LogoBesameMucho"/>

        <TitlesAnimation text= "Besame Mucho Photography"/>
        
        

        </div>
    )
}

export default MainPage;