import React, { useState } from "react";
import "../stylesheets/Menu.css"
import { VscMenu } from "react-icons/vsc";

function Menu() {



  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);

  //const closeMenu = setOpen(false)

  };

      return (

    
      <div className="container-menu">

     
          <div className="menu-icon" onClick={toggleMenu}>
            <VscMenu style={{ fontSize: "25px" }}/>
          </div>
      

        {open && (
          
          <ul className="menu-open">
           
            <li>
              <a href="#">Contacto</a>
            </li>
            <li>
              <a href="#">Portafolio</a>
            </li>
            <li>
              <a href="#">Testimonios</a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Siguenos</a>
            </li>
          
          </ul>
        )}

      </div>
        
        
    );
  };


export default Menu;
