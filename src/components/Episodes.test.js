import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

 test('a string from Episodes Renders at all', async () => {
    //arrange
    const { getByText } = render(<Episodes />);
    //act
    const appTest = getByText(/chapter/i);
    //assert
    expect(appTest).toBeInTheDocument();
 })
