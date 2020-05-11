import React from 'react';
import { render } from '@testing-library/react';

import Episodes from './Episodes';

 test('a string from Episodes Renders at all', async () => {
    //arrange
    const { getAllByTestId } = render(<Episodes episodes={[{id:1},{id:2},{id:3}]}/>);
    //act
    const appTest = getAllByTestId("episode");
    //assert
    expect(appTest).toHaveLength(3);
 })

