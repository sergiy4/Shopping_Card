import React from "react";
import '../styles/Header.css';
import { animated,useSpring } from "@react-spring/web";

function Header(){

    const [{textShadow}, set] = useSpring(() => ({translateZ:'0px',textShadow:'0px 0px 0px  rgb(0, 0, 0)'}));


    return(
        <header className="header_stick">
        
            <animated.h1 
            className="name_shop" 
            style={{textShadow}}
            
            onMouseEnter={()=>set({textShadow:'3px 3px 0px rgb(0, 0, 0)'})}
            onMouseLeave={()=>set({textShadow:'0px 0px 0px rgb(0, 0, 0)'})}
            >FakePlants</animated.h1>


            
            <ul className="list">
                <animated.li
                >Shop</animated.li>
                <li>Contact</li>
                <li>Shopping cart</li>
               
            </ul>
        </header>
    )
}

export default Header