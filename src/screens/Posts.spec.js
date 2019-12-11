import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import App from '../App';
import Posts from './Posts';

jest.mock('react-native/Libraries/Lists/FlatList', () => 'FlatList');

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  posts: [],
};

describe('Testing Posts', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <App>
        <Posts />
      </App>,
      {
        context: {store: mockStore(initialState)},
      },
    ).dive();
    console.log(wrapper.debug());
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
