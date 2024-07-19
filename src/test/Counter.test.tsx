import {describe, expect,test} from 'vitest'

import {render,screen} from '@testing-library/react'
import Counter from '../components/Counter.js'


describe('counter component',()=>{
    test('check rendering correctly or not',()=>{
        render(<Counter/>)
        const headingElement = screen.getByRole('heading')
        expect(headingElement).toHaveTextContent('this is counter')
    })
})