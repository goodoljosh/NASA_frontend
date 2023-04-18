import React from 'react';
import App from '../App';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe("Suite to test App component", ()=>{
    test('Snapshot of Body', () => {
        // import the App component and pass it title as a prop
        const {asFragment} = render(<App title="hello world"/>);
        // once imported it generates and matches the snapshot to the test.
        expect(asFragment()).toMatchSnapshot()
    });    
})