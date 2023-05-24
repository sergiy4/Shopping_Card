import {render, screen,cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Header from '../components/HeaderComponent'
import "@testing-library/jest-dom"

afterEach(()=>{
    cleanup()
})

describe('testing Header component', ()=>{
    test('correct render',()=>{
        const {asFragment} = render(<Header/>)

        expect(asFragment()).toMatchSnapshot()

    })

    test('check correctly render h1',()=>{
        render(<Header/>)

        const h1 = screen.getByText('FakePlants')

        expect(h1).toBeInTheDocument()
    })

    test('check correctly render list',()=>{
        render(<Header/>)

        const list = screen.getByRole('list')
        const listItems = screen.getAllByRole('listitem')

        expect(list).toBeInTheDocument()
        expect(listItems.length).toEqual(3)
    })
    

})