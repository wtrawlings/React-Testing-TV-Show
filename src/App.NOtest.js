import React from 'react';
import { render, wait, getAllByTestId, fireEvent } from '@testing-library/react';
import { fetchShow as mockFetchShow } from "./api/fetchShow";

//import the app?
import App from './App';

 test('a string from App Renders at all', () => {
    //arrange
    const { getByText } = render(<App />);
    //we are destructuring getByText out of 'render'
    //act
    const appTest = getByText(/fetching data.../i);
    //reg ex is the format we have our text in between the slashes
    //assert
    expect(appTest).toBeInTheDocument();
 });
/******************************************************* */
 //create mock before setting up test
// jest.mock('./api/fetchShow')

// const data = {
//     data: {
//         id: 2993,
//         url: "http://www.tvmaze.com/shows/2993/stranger-things",
//         name: "Stranger Things",
//         type: "Scripted",
//         language: "English",
//         genres: ["Drama", "Fantasy", "Science-Fiction"],
//         status: "Running",
//         runtime: 60,
//         premiered: "2016-07-15",
//         officialSite: "https://www.netflix.com/title/80057281",
//         schedule: {
//           time: "",
//           days: ["Thursday"],
//         }
//     }}

// test('data.data.name renders from after fetching data', async () => {
//     mockFetchShow.mockResolvedValueOnce(data);
//     const { getByText, getAllByTestId } = render(<App />);

//     const findTitleData = getByText(/stranger/i);
//     fireEvent.click
//     //add await
//     await wait(() => expect(getAllByTestId(/data.data.name/i)).
//  });

