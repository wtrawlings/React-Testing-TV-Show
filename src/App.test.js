import React from 'react';
import { render } from '@testing-library/react';

//import the app?
import App from './App';

 test('a string from App Renders at all', async () => {
    //arrange
    const { getByText } = render(<App />);
    //act
    const appTest = getByText(/stranger/i);
    //assert
    expect(appTest).toBeInTheDocument();
 })

