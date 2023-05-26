import { useRef, useState } from "react"
import { plantsData } from "../data/PlantsListData"
import { useSpring, useSprings, animated } from "@react-spring/web"
import '../styles/ShopPage.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function ShopPage(){

    const [index, setIndex] = useState(null);
    const [viewBtn, setViewBtn] = useState(false);
    const [BuyBtn, setBuyBtn] = useState(false);
    const [on,setOn] = useState(true)
    // const triggerRef = useRef();
    // const dataRef = useIntersectionObserver(triggerRef,{
    //     freezeOnceVisible: true
    // })
    const springs = useSprings(
        plantsData.length,
        plantsData.map((item,i)=>(
            {   
                from:{
                  
                    boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',
                    top:'0%',
                    left:'0%',
                },
                to:{

                    boxShadow: i === index? '10px 10px 0px 0px rgb(0, 0, 0)':'0px 0px 0px 0px rgb(0, 0, 0)' ,
                   

                    top: i=== index? '-3%':'0%' ,
                    left: i=== index? '-3%':'0%',
    
                }
            }
        ))
    )

    

    return(
       <main className="Shop_Main">
        <div className="area_cards">
       
            {springs.map(
                (
                    {boxShadow, top ,left},
                    i
                )=>(
                    
                    <div key={i}   className="card" >  
                        <img src={plantsData[i].picture} className="img_card" alt="plant"></img>
                        <div className="info_part_card">

                            <h2>{plantsData[i].name}</h2>
                            <h4>Price : {` ${plantsData[i].price} $`}</h4>

                            <div className="buttons">
                                <div className="btn_around"

                                    onMouseEnter={()=>{
                                        setIndex(i);
                                        setViewBtn(true)
                                        
                                    }}
                                    onMouseLeave={()=>{
                                        setIndex(null)
                                        setViewBtn(false)
                                       
                                        
                                        
                                        
                                    }}
                                >
                                <animated.button 
                                    className="Card_Btn"
                                    style={!viewBtn? { boxShadow,top,left}:null}
                                    
                                >VIEW</animated.button>
                                </div>
                                <div
                                    className="btn_around"
                                    onMouseEnter={()=>{
                                        setIndex(i);
                                        setBuyBtn(true)

                                       
                                    }}
                                    onMouseLeave={()=>{
                                        setIndex(null)
                                        setBuyBtn(false)
                                       
                                    }}
                                >
                                <animated.button 

                                    className="Card_Btn"
                                    style={BuyBtn ? { boxShadow,top,left}:null}
                                    
                                >BUY</animated.button>
                               </div>
                                
                            </div>
                        </div>
                    </div>
                )
            )}
            
        </div>
       </main>
    )
}

export default ShopPage