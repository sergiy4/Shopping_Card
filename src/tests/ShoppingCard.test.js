import ShoppingCard from "../components/ShoppingCart";
import {render, screen,cleanup, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import { act } from 'react-dom/test-utils';
import aglonema from '../img/png/aglonema.png'
import AsparagusFern from '../img/png/AsparagusFern.jpg'
import CalatheaOrnata from '../img/png/CalatheaOrnata.png'
import Orchid from '../img/png/Orchid.png'
import PeaceLily from '../img/png/PeaceLily.png'

afterEach(cleanup)

describe('testing shopping gard component',()=>{
    const plants =[
            {
                picture: aglonema,
                name:'Chinese Evergreen',
                price: 17,
                count:1
            },
            {
                picture:AsparagusFern,
                name:'Asparagus Fern',
                price: 17,
                count:4
            },
         
            {
                picture:Orchid,
                name:'Orchid',
                price:65,
                count:1
            },
            {
                picture:PeaceLily,
                name:'Peace Lily',
                price:5,
                count:1
            }
    ]

   

    test('check render',()=>{
        render(<ShoppingCard plants={plants}/>)

        const pictures = screen.getAllByRole('img',{name:'plant'})
        const buttons = screen.getAllByRole('button')

        expect(buttons.length).toEqual(plants.length*2)
        expect(pictures.length).toEqual(plants.length)


    }),

    test('checking the correctness of calculations',()=>{
        const plants2 = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            }
        ]

        render(<ShoppingCard plants={plants2}/>)
        
        const sum = plants2[0].price * plants2[0].count;
        const allPriceH1 = screen.getByTestId('allSum')

        expect(allPriceH1).toHaveTextContent(`${sum}`)
         
    })

    
    test('increment buttons', async ()=>{
        const user = userEvent.setup();
       
        const data = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            },
            {
                picture:aglonema,
                name:'aglonema',
                price:20,
                count:2
            }
        ]

        const fakeIncrement = jest.fn((index)=>{
            data[index].count = data[index].count+1;
            
            
        })

        const {rerender} = render(<ShoppingCard increment={fakeIncrement} plants={data}/>)
        
        
        let allPrice = ((data[0].count +1) * data[0].price)+
        ((data[1].count+1) * data[1].price) 
        
        const btnIncrements = await screen.findAllByText('+')

       
        await user.click(btnIncrements[0]);
        render(<ShoppingCard increment={fakeIncrement} plants={data} />)
     
        await user.click(btnIncrements[1]);
        render(<ShoppingCard increment={fakeIncrement} plants={data}/>)
       
        expect(fakeIncrement).toBeCalledTimes(2)

        const h1s = screen.getAllByTestId('allSum')
        expect(h1s[2]).toHaveTextContent(`${allPrice}`)
        
        
    })

    test('decrement buttons', async ()=>{
        const user = userEvent.setup();
        const data = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            },
            {
                picture:aglonema,
                name:'aglonema',
                price:20,
                count:2
            }
        ]

        const fakeDecrement = jest.fn((index)=>{
            data[index].count = data[index].count-1;
            
            
        })

        render(<ShoppingCard decrement={fakeDecrement} plants={data}/>)
        
        
        let allPrice = ((data[0].count -1) * data[0].price)+
        ((data[1].count-1) * data[1].price) 
        
        const btnDecrements = await screen.findAllByText('-')

       
        await user.click(btnDecrements[0]);
        render(<ShoppingCard decrement={fakeDecrement} plants={data}/>)

        await user.click(btnDecrements[1]);
        render(<ShoppingCard decrement={fakeDecrement} plants={data}/>)
       
        expect(fakeDecrement).toBeCalledTimes(2)


        const h1s = screen.getAllByTestId('allSum')
        expect(h1s[2]).toHaveTextContent(`${allPrice}`)

       



    })

    test('Correctly show count in input', ()=>{
        const plants2 = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            }
        ]

        // const user = userEvent.setup()
      
        render(<ShoppingCard plants={plants2}/>)

        const input = screen.getByTestId('inp');
        
        expect( input.getAttribute('value')).toEqual('4')

    })

    test('Pass text in input', async()=>{
        const plants2 = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            }
        ]

        const user = userEvent.setup()
      
        render(<ShoppingCard plants={plants2}/>)

        const input = screen.getByTestId('inp');

        await user.type(input, "text");

        expect( input.getAttribute('value')).toEqual('4')

    })


    test('change input defaultValue after click increment ', async ()=>{
        const dataPlants = [
            {
                picture:aglonema,
                name:'aglonema',
                price:25,
                count:4
            }
        ]

        const user = userEvent.setup()

        const increment = jest.fn((index)=>{
            dataPlants[index].count = dataPlants[index].count+1
        })
        const {rerender} = render(<ShoppingCard increment={increment} plants={dataPlants}/>)

        const input = screen.getByTestId('inp');
        const incrementBtn = screen.getByText('+')

        expect(input.getAttribute('value')).toBe('4');

        await user.click(incrementBtn);

        expect(input.getAttribute('value')).toBe('5');

    })

})


   

    

    

