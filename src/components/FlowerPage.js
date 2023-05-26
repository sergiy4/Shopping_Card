import { useSpring, animated } from '@react-spring/web'
import Chinese from '../img/png/aglonema.png'
import '../styles/PlantPage.css' 

function FlowerPage(props){

    const {imgPlant,name,price} = props
    
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
    return(

       <main className='plant_main'>
            <div className='Around_item'
                onMouseEnter={handleMouseEnter}
                 
                onMouseLeave={handleMouseLeave}
            >
            
                <animated.div   className='item' style={itemStyle}> 
                
                    <img src={Chinese} alt='plant' className='img_plant'></img>
                    <div className='Info'>
                        <div className='right_part'>
                            <animated.h1
                                style={textStyle} 
                                className='text'
                            >sdfsdfdsfsd
                            </animated.h1>

                            <animated.h3
                                style={textStyle}
                                className='text'
                            >sdfsddfsdf
                            </animated.h3>

                            <div className='around_btn'
                                onMouseEnter={()=>{
                                    setBtnStyle({boxShadow:'10px 10px 0px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
                                    set({textShadow:'3px 2px 0px rgb(0, 0, 0)',top:'-2.7%',left:'-2.7%'})
                                }}   
                                onMouseLeave={()=>{
                                    setBtnStyle({boxShadow:'0px 0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
                                    set({textShadow:'0px 0px 0px rgb(0, 0, 0)',top:'0%',left:'0%'})
                                }}
                            >
                                <animated.button  
                                    style={BtnStyle}
                                    className='btn_buy'
                                    >BUY</animated.button>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
          
       </main>

    )
}
export default FlowerPage