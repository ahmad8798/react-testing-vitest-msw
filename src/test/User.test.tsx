import {render,screen} from '@testing-library/react'
import {describe, expect,test} from 'vitest'
import User from '../components/User.js';


describe('user component',()=>{

    test('api success secnario on load',async()=>{
        screen.debug()
        render(<User />);
        expect(await screen.findByText("1")).toBeInTheDocument();
        screen.debug()
    })
})