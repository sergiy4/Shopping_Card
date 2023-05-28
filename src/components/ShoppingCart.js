import { useEffect, useState } from 'react'
import aglonema from '../img/png/aglonema.png'
import AsparagusFern from '../img/png/AsparagusFern.jpg'
import CalatheaOrnata from '../img/png/CalatheaOrnata.png'
import Orchid from '../img/png/Orchid.png'
import PeaceLily from '../img/png/PeaceLily.png'
import '../styles/ShoppingCard.css'

function ShoppingCard(props){

    const {increment,decrement,plants,handleChange} = props
    const [sum,setSum] = useState(0)
    const [btnClick, setBtnClick] = useState(false)

   
    useEffect(()=>{
        sumCalc()

       

    },[plants,btnClick])

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
                <div className='Around_shopping_card'>
            {plants.map((item,i)=>(
                
                    <div key={i} className='Shopping_card'>
                        
                      
                    <img className='Shopping_Card_img' alt='plant' src={item.picture}></img>

                        <div className='right_part_shopping'>
                            <p>{item.name}</p>
                            
                            <div className='input_and_buttons'>
                                <button
                                className='btn_Card_shopping'
                                    data-testid = '+'
                                    onClick={()=>{increment(item.id)}}

                                >+</button>

                                <input 
                                    className='inp_card'

                                    data-testid='inp'
                                    value={plants[i].count} 
                                    type="text" inputMode="numeric" 

                                    onKeyDown={(e)  =>{
                                        let inputVal = e.target.value
                                        let key = e.key;
                                        let numericRegex = /^[0-9]+$/;
                                        
                                        if( (key === "-" && inputVal.includes("-")) ||

                                        (key !== "Backspace" && key !== "Tab" && key !== "ArrowLeft" && key !== "ArrowRight" && !numericRegex.test(key))){
                                            e.preventDefault()
                                        }
                                    
                                    }}

                                    onChange={(e)=>{
                                        handleChange(e,item.id)
                                    }}
                                        
                                >
                                </input>
                                
                                <button
                                className='btn_Card_shopping'
                                    onClick={()=>{decrement(item.id)}}
                                >-</button>
                            </div>
                           
                        </div>
                        <button className='det_Btn'>Delete</button>
                    </div>
                ))}
                
                </div>
                <h1 data-testid='allSum'>{sum}</h1>
            </div>
        </main>
    )
}

export default ShoppingCard