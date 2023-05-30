import { useSpring, animated } from '@react-spring/web'
import Chinese from '../img/png/aglonema.png'
import '../styles/PlantPage.css' 
import { useLocation } from 'react-router-dom'

function FlowerPage(props){
    const location = useLocation()
    const {picture,name,price,count,id} = location.state
    console.log(id)
    const {setDataPlants,dataPlants} = props
    // animation
    const [itemStyle, setItemStyle] = useSpring(() => ({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'}));
    const [BtnStyle,setBtnStyle] = useSpring(()=> ({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'}))
    const [textStyle, set] = useSpring(() => ({textShadow:'0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'}));
    const handleMouseEnter = () =>{
        setItemStyle({
            boxShadow:'15px 15px 0px 0px rgb(0, 0, 0)',
            top:'-2.7%',
            left:'-2.7%' 
        })
    }
    const handleMouseLeave = ()=>{
        setItemStyle({
            boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',
            top:'0%',
            left:'0%'
        })
    }

    const setStyle = () =>{
        setBtnStyle({boxShadow:'10px 10px 0px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
        set({textShadow:'2px 2px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
    }

    const delStyle = () =>{
        setBtnStyle({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
        set({textShadow:'0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
    }
    return(

       <main className='plant_main'>
            <div className='Around_item'
                onMouseEnter={handleMouseEnter}
                 
                onMouseLeave={handleMouseLeave}
            >
            
                <animated.div   className='item' style={itemStyle}> 
                
                    <img src={picture} alt='plant' className='img_plant'></img>
                    <div className='Info'>
                        <div className='right_part'>
                            <div className='forPosition'>
                            <animated.h1
                                style={textStyle} 
                                className='text'
                            >
                                {name}
                            </animated.h1>

                            <animated.h3
                                style={textStyle}
                                className='text'
                            >
                                {price}
                            </animated.h3>

                            <div className='around_btn'
                                onTouchStart={()=>{
                                    setStyle()
                                }}
                                onTouchEnd={()=>{
                                    delStyle()
                                }}
                                onMouseEnter={()=>{
                                    setStyle()
                                }}   
                                onMouseLeave={()=>{
                                    delStyle()
                                }}
                            >
                                <animated.button  
                                    style={BtnStyle}
                                    className='btn_buy'
                                    onClick={()=>{

                                        let newEl = {
                                            picture:picture,
                                            name:name,
                                            price:price,
                                            count:count+1,
                                            id:id
                                        }

                                        if(dataPlants.length>=1){

                                           let  e;
                                           let  newAr =  dataPlants.map(el =>{
                                            
                                                if(el.id===id){
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
                </animated.div>
            </div>
          
       </main>

    )
}
export default FlowerPage