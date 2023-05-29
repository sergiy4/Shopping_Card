import { useEffect, useState } from 'react'
import '../styles/ShoppingCard.css'
import { animated, useSprings} from '@react-spring/web'

function ShoppingCard(props){

    const {increment,decrement,plants,handleChange,delPlant} = props
    const [sum,setSum] = useState(0)
   

   
    useEffect(()=>{
        sumCalc()
    },[plants])

    const sumCalc = () =>{
        let s = 0;

        plants.map(item =>{
            s+= item.count*item.price
        })

        setSum(s)
    }

    // animation
    const [index, setIndex] = useState(null);
    const [btnIndex,setBtnIndex] = useState(null)
    const springs = useSprings(
        
        plants.length,
        plants.map((item,i)=>(
            {   
                boxShadow: i === index? '10px 10px 0px 0px rgb(0, 0, 0)':'0px 0px 0px 0px rgb(0, 0, 0)' ,
                top: i=== index? '-3%':'0%' ,
                left: i=== index? '-3%':'0%',
                from:{
                  
                    boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',
                    top:'0%',
                    left:'0%',
                },

            }
        ))
    )

    const buttonStyles = plants.map((_, i) => ({
        boxShadow: i === btnIndex ? '15px 15px 0px 0px rgb(0, 0, 0)' : '0px 0px 0px 0px rgb(0, 0, 0)',
        top: i === btnIndex ? '-2.7%' : '0%',
        left: i === btnIndex ? '-2.7%' : '0%',
    }))
    
    const btnSprings = useSprings(
        plants.length,
        buttonStyles
    )


    return(
        <main className='Shopping_card_main'>
            
            <div className='Shopping_card_block'>
                <div className='Around_shopping_cards'>
            {springs.map(
                (
                   
                    {boxShadow, top ,left},
                    i
                )=>(
                    <div className='around_shopping_card'
                        key={i} 
                        onMouseEnter={()=>{
                            
                            console.log(i);
                            
                            setIndex(i)
                            console.log(index)
                        }}
                        onMouseLeave={()=>{
                            setIndex(null)
                        }}
                    >
                    <animated.div 
                       
                        className='Shopping_card'
                        style={{ boxShadow,top,left}}
                    >
                        
                      
                        <img className='Shopping_Card_img' alt='plant' src={plants[i].picture}></img>

                        <div className='right_part_shopping'>
                            <p>{plants[i].name}</p>
                            <p>Price: {plants[i].price} $</p>
                            
                            <div className='input_and_buttons'>
                                <button
                                className='btn_Card_shopping'
                                    data-testid = '+'
                                   
                                    onClick={()=>{increment(plants[i].id)}}

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
                                       
                                        handleChange(e,plants[i].id)
                                    }}
                                        
                                >
                                </input>
                                
                                <button
                                className='btn_Card_shopping'
                               
                                    onClick={()=>{decrement(plants[i].id)}}
                                >-</button>
                            </div>
                           
                        </div>
                        <div className='around_delete_btn'
                         onMouseEnter={() => {
                            setBtnIndex(i);
                       
                          }}
                          onMouseLeave={()=>{
                             setBtnIndex(null);
                          }}
                        >
                        <animated.button
                         style={btnSprings[i]} // Використовуємо стилі з btnSprings для кожної окремої кнопки
                        onClick={()=>{
                            delPlant(plants[i].id)
                        }}
                           className='det_Btn'>DELETE</animated.button>
                           </div>
                        </animated.div>
                    </div>
                ))}
                
                </div>
                <div className='all_Sum_div'>
                    <h1>All sum:</h1>
                    <h1 data-testid='allSum'>{sum}</h1>
                </div>
                
            </div>
        </main>
    )
}

export default ShoppingCard