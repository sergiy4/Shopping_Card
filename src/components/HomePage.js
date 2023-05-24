import React from "react";
import '../styles/Home.css';
import { animated,useSpring } from "@react-spring/web";

function Home(){

    const styles = useSpring({
        from: {
          opacity: 0.5,
            perspective:'5000px',
          rotateY:'0deg', 
          rotateX:'0deg', 
          rotateZ:'0deg',
        },
        to: {
          opacity: 1,
            perspective:'5000px',
          rotateY:'-30deg', 
          rotateX:'50deg', 
          rotateZ:'20deg',
        },
        config: {
            mass: 5,
            tension: 170,
            friction: 60,
          
            clamp:true
        },
        
    })
// 

    const [{translateZ,textShadow}, set] = useSpring(() => ({translateZ:'0px',textShadow:'0px 0px 0px  rgb(0, 0, 0)'}));
    const [{boxShadow}, setShadow] = useSpring(() => ({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)'}));
    // const [{textShadow}, setTextShadow] = useSpring(() => ({textShadow:'0px 0px 0px 0px rgb(0, 0, 0)'}));
    return(
        <main className="Start_screen">
            <div  className="Home_text_block" >

           
                <div className="block"  >
                    <animated.div  >
                        <animated.h1  style={{translateZ,textShadow}}  className="Main_text"><animated.span  className="Main_span first_spain">Good</animated.span> <br/> Plant - good <br/><span className="Main_span">Mood</span></animated.h1>
                        <animated.button 
                            className="Shop_Btn" 
                            style={{boxShadow}} 
                            onMouseEnter={()=>{
                                setShadow({boxShadow:'15px 15px 0px 0px rgb(0, 0, 0)'})
                                set({translateZ:'1000px',textShadow:'9px 5px 0px  rgb(0, 0, 0)'})
                                // setTextShadow({textShadow:'6px 3px 1px rgb(0, 0, 0)'})
                            }
                            }
                            
                            onMouseLeave={()=>{
                                setShadow({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)'})
                                set({translateZ:'0px',textShadow:'0px 0px 0px rgb(0, 0, 0)'})
                            }
                            }
                        >Shop</animated.button>
                    </animated.div>
                </div>
            </div>

        </main>
    )
}
export default Home