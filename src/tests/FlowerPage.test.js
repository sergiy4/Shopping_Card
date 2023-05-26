import {render, screen,cleanup} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import "@testing-library/jest-dom"
import FlowerPage from '../components/FlowerPage'

afterEach(()=>{
    cleanup()
})

describe('Testing FlowerPage',()=>{
    test('correctly render FlowerPage',()=>{
        const {asFragment} = render(<FlowerPage/>)

        expect(asFragment()).toMatchSnapshot()
        
    }),
    test('renders img and two buttons',()=>{
        render(<FlowerPage/>)

        const img = screen.getByRole('img',{name:'plant'})
        const button = screen.getByRole('button')

        expect(img).toBeInTheDocument()
        expect(button).toBeInTheDocument()
        expect(img).toHaveClass('img_plant')
    })


})
