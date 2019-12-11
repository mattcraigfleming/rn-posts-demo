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

describe('Testing Posts', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<App />, {
      context: {store: mockStore(initialState)},
    }).dive();
    expect(wrapper.dive()).toMatchSnapshot();
  });
});

//   const posts = [
//     {
//       userId: 1,
//       id: 1,
//       title:
//         'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
//       body:
//         'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
//     },
//     {
//       userId: 1,
//       id: 2,
//       title: 'qui est esse',
//       body:
//         'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
//     },
//     {
//       userId: 1,
//       id: 3,
//       title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
//       body:
//         'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
//     },
//   ];
