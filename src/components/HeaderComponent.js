import React from "react";
import '../styles/Header.css';
import { animated,useSpring, useSprings } from "@react-spring/web";
import { useState } from "react";
import { Link } from "react-router-dom";


function Header(){

    const [styleName, set] = useSpring(() => ({textShadow:'0px 0px 0px  rgb(0, 0, 0)',top:'0%',left:'0%'}));

    const data = [
        {
            name:'Shop',
            link:'/shop'
        },
        {
            name:'Shopping Card',
            link:'/shopping_card'
        }
    ]

    const [index, setIndex] = useState(null);

    const springs = useSprings(
        data.length,
        data.map((item,i)=>({
            textShadow:i===index?'3px 3px 0px rgb(0, 0, 0)':'0px 0px 0px rgb(0, 0, 0)',
            top:i===index? '-2.7%':'0%',
            left:i === index?'-2.7%':'0%',
            from:{
                top:'0%',
                left:'0%',
                textShadow:'0px 0px 0px rgb(0, 0, 0)'
            }
        }))
    );

   

    return(


        <header className="header_stick">
        
            <animated.h1 
                className="name_shop" 
                style={styleName}
            
                onMouseEnter={()=>set({textShadow:'2px 2px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-1%'})}
                onMouseLeave={()=>set({textShadow:'0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})}
            >
                <Link to='/' style={{ textDecoration: 'none' , color:'rgb(11, 173, 87)'}}>FakePlants</Link>
            </animated.h1>

            <ul className="list">

                {springs.map(
                    (
                        styleUl,
                        i
                    )=>(
                        <animated.li
                            onMouseEnter={()=>{
                               setIndex(i);
                            }}
                            onMouseLeave={()=>{
                                setIndex(null)
                            }}
                            key={i}
                            style={styleUl}
                        >
                            
                            <Link  style={{ textDecoration: 'none' ,color:'rgb(11, 173, 87)'}} to={`${data[i].link}`}>{data[i].name}</Link>
                        </animated.li>
                    )

                )}
               
            </ul>
        </header>
    )
}

// 
export default Header