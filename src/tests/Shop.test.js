import {render, screen,cleanup} from '@testing-library/react'
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

    test('all cards renders',()=>{
        render(<ShopPage/>)

        const cards = screen.getAllByRole('img',{name:'plant'})

        expect(cards).toBeInTheDocument()
        expect(cards.length).toEqual(11)
        
    })
})