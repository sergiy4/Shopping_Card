import React from "react";
import '../styles/Home.css';
import { animated,useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";

function Home(){

//    Animation
    const [textStyle, set] = useSpring(() => ({textShadow:'0px 0px 0px  rgb(0, 0, 0)',top:'0%',left:'0%'}));
    const [btnStyle, setShadow] = useSpring(() => ({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)', top:'0%',left:'0%'}));

    return(
        <main className="Start_screen">
            <div  className="Home_text_block" >

           
                <div className="block"  >
                    <animated.div >
                        <animated.h1  style={textStyle}  className="Main_text"><animated.span  className="Main_span first_spain">Good</animated.span> <br/> Plant - good <br/><span className="Main_span">Mood</span></animated.h1>
                        <div className="Around_shop_button"

                            onMouseEnter={()=>{
                                setShadow({boxShadow:'15px 15px 0px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
                                set({textShadow:'5px 5px 0px  rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
                            }}
                        
                            onMouseLeave={()=>{
                                setShadow({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
                                set({translateZ:'0px',textShadow:'0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
                            }}
                        >
                        <Link to='/shop' >
                        
                        <animated.button 
                            className="Shop_Btn" 
                            style={btnStyle} 
                           
                        >Shop</animated.button>
                       
                        </Link>
                        </div>
                    </animated.div>
                </div>
            </div>

        </main>
    )
}
export default Home