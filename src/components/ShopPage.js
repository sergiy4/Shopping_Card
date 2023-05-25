import { useState } from "react"
import { plantsData } from "../data/PlantsListData"
import { useSpring, useSprings } from "@react-spring/web"



function ShopPage(){

    const [index, setIndex] = useState(null);

    const springs = useSprings(
        plantsData.length,
        plantsData.map((item,i)=>(
            {   
                backgroundColor:'#fff',

                from:{
                    backgroundColor:'#ddd'
                }
            }
        ))
    )

    return(
       <main className="Shop_Main">
        <div className="area_cards">
            {springs.map(
                (
                    {backgroundColor},
                    i
                )=>(
                    <div key={i}>
                        <img src={springs[i].picture}></img>
                    </div>

                    
                )
            )}
        </div>
       </main>
    )
}

export default ShopPage