import {combineReducers} from 'redux';

import {FETCH_POSTS} from './actions';

let initialState = {posts: []};

const getPosts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, posts: action.posts};
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  getPosts,
  // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
});

export default rootReducer;
