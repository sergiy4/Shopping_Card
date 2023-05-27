import { useEffect, useState } from 'react'
import aglonema from '../img/png/aglonema.png'
import AsparagusFern from '../img/png/AsparagusFern.jpg'
import CalatheaOrnata from '../img/png/CalatheaOrnata.png'
import Orchid from '../img/png/Orchid.png'
import PeaceLily from '../img/png/PeaceLily.png'


function ShoppingCard(props){

    const {increment,decrement,plants} = props
    const [sum,setSum] = useState(0)
    const [btnClick, setBtnClick] = useState(false)
   
    useEffect(()=>{
        sumCalc()

    },[btnClick])

    const sumCalc = () =>{
        let s = 0;
        plants.map(item =>{
            s+= item.count*item.price
        })

        setSum(s)
    }


   

    return(
        <main className='Shopping_card_main'>
            <div className='Shopping_card_block'>
            {plants.map((item,i)=>(
                    <div key={i} className='Shopping_card'>
                        <img alt='plant' src={item.picture}></img>
                        <h1>{item.title}</h1>
                        <div>
                            <button
                                data-testid = '+'
                                onClick={()=>{increment(i)
                                setBtnClick(!btnClick)}}
                            >+</button>
                            <input 
                                data-testid='inp'
                                defaultValue={item.count} type="number" >

                            </input>
                            <button
                                onClick={()=>{decrement(i)
                                setBtnClick(!btnClick)}}
                            >-</button>
                        </div>
                    </div>
                ))}
                <h1 data-testid='allSum'>{sum}</h1>
            </div>
        </main>
    )
}

export default ShoppingCard