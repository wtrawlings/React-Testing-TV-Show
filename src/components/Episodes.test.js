import React from 'react';
import { render } from '@testing-library/react';

import { Episodes } from './Episodes';

// test('explain the test', () => {
    
// })
test('Episodes renders correctly', () => {
    const mockGetData = jest.fn();
    const { getByText } = render(
        <Episodes getData={mockGetData} isFetchingData = {false} />

    );
    getByText(/null/i)
    //this is the long version of the test line below.
    //expect(getByText(/select a season/i)).toBeInTheDocument();
})