import {combineReducers} from 'redux';
import {FETCH_POSTS, FETCH_AUTHORS} from './actions';

let initialState = {posts: [], author: {}};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, posts: [...action.data]};
    case FETCH_AUTHORS:
      return {...state, author: action.data};
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  postsReducer,
});

export default rootReducer;
