import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import App from '../App';
import Posts from './Posts';
import PostDetails from './PostDetails';

jest.mock('react-native/Libraries/Lists/FlatList', () => 'FlatList');

const middlewares = [];
const mockStore = configureStore(middlewares);

const initialState = {
  posts: [],
};

describe('Testing Authors', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <App>
        <Posts>
          <PostDetails />
        </Posts>
      </App>,
      {
        context: {store: mockStore(initialState)},
      },
    ).dive();
    expect(wrapper.dive()).toMatchSnapshot();
  });
});
