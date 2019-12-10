import {combineReducers} from 'redux';

import {FETCH_POSTS} from './actions';

let initialState = {posts: []};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, posts: [...action.data]};
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
