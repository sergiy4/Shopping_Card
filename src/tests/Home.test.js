import {render, screen,cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '../components/HomePage'
import "@testing-library/jest-dom"
afterEach(()=>{
    cleanup()
})

describe('Testing HomePages',()=>{
    test("renders",()=>{
        const {asFragment} = render(<Home/>)

        expect(asFragment()).toMatchSnapshot()
    })

    test("Renders component h1",()=>{
       render(<Home/>);

        const h1 = screen.getByText('Good')

        screen.debug();
        expect(h1).toBeInTheDocument()
        
    })


    test("Renders img flowers",()=>{
        render(<Home/>);

        const BtnShop = screen.getByText('Shop');


        expect(BtnShop).toBeInTheDocument()
    })
})

// I saw this flower and thought of you because it's pretty and... Well, I don't really like it, but I thought you might like it, 'cause you're pretty.