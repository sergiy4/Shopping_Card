import {render, screen,cleanup, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ShopPage from '../components/ShopPage'
import "@testing-library/jest-dom"

afterEach(()=>{
    cleanup();
})

describe('testing ShopPage',()=>{
    test('correctly render',()=>{
        const {asFragment} = render(<ShopPage/>)

        expect(asFragment()).toMatchSnapshot();
    })

    test('all cards renders', async()=>{
        render(<ShopPage/>)

        const cards = await screen.findAllByRole('img',{name:'plant'})

        waitFor(()=>expect(cards).toBeInTheDocument()) 
        expect(cards.length).toEqual(10)
        
    })
})