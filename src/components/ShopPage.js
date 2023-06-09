import {  useState } from "react"
import { plantsData } from "../data/PlantsListData"
import { useSprings, animated } from "@react-spring/web"
import '../styles/ShopPage.css'

import { Link } from "react-router-dom"

function ShopPage(props){

    // Logic hook
    const [dataOnePlant,setDataOnePlant] = useState({
        picture:'',
        name:'',
        price:0,
        count:0,
        id:0
    })
    const {setDataPlants,dataPlants} = props
  


    
    // Animation hook
    const [index, setIndex] = useState(null);
    const [viewBtn, setViewBtn] = useState(false);
    const [BuyBtn, setBuyBtn] = useState(false);
   

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
                                    
                                    onTouchStart={()=>{
                                        setIndex(i);
                                        setViewBtn(true)
                                    }}
                                    onTouchEnd={()=>{
                                        setIndex(null)
                                        setViewBtn(false)
                                    }}
                                    onMouseEnter={()=>{
                                        setIndex(i);
                                        setViewBtn(true)
                                        
                                    }}
                                    onMouseLeave={()=>{
                                        setIndex(null)
                                        setViewBtn(false)
                                    }}
                                >
                                <Link to={`/shop/${plantsData[i].name}`} state={{
                                    picture:plantsData[i].picture,
                                    name:plantsData[i].name,
                                    price:plantsData[i].price,
                                    count:dataOnePlant.count,
                                    id:i
                                   
                                }}>
                                <animated.button 
                                    className="Card_Btn"
                                    style={viewBtn? { boxShadow,top,left}:null}
                                    
                                >VIEW</animated.button>
                                </Link>
                                </div>
                                <div
                                    className="btn_around"
                                    
                                    onTouchStart={()=>{
                                        setIndex(i);
                                        setBuyBtn(true)

                                    }}
                                    onTouchEnd={()=>{
                                        setIndex(null)
                                        setBuyBtn(false)
                                    }}
                                    onMouseEnter={()=>{
                                        setIndex(null)
                                        setBuyBtn(false)
                                    }}
                                    onMouseLeave={()=>{
                                        setIndex(null)
                                        setBuyBtn(false)
                                    }}
                                >
                                <animated.button 

                                    className="Card_Btn"
                                    style={BuyBtn ? { boxShadow,top,left}:null}
                                    onClick={()=>{

                                        let newEl = {
                                            picture:plantsData[i].picture,
                                            name:plantsData[i].name,
                                            price:plantsData[i].price,
                                            count:dataOnePlant.count+1,
                                            id:i
                                        }

                                        if(dataPlants.length>=1){

                                           let  e;
                                           let  newAr =  dataPlants.map(el =>{
                                            
                                                if(el.id===i){
                                                    e = {
                                                        ...el,
                                                        count:el.count+1
                                                    }
                                                    return e
                                                }
                                                else{
                                                    return el
                                                }
                                            })

                                            e? setDataPlants(newAr) : setDataPlants(prevVal=>prevVal.concat(newEl))

                                        }else{
                                            
                                            let arr = [newEl]
                                            setDataPlants(arr);
                                        }
                                        
                                    }}
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