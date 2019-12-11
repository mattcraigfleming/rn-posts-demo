import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

jest.mock('react-native/Libraries/Lists/FlatList', () => 'FlatList');

// imported as a connected component!
import App from '../App';

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
  posts: [],
};

describe('Testing Authors', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<App />, {
      context: {store: mockStore(initialState)},
    }).dive();
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

//   const leanne = {id: 1, name: 'Leanne Graham'};
//   const ervin = {id: 2, name: 'Ervin Howell'};
//   const authors = [leanne, ervin];
