import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Posts from '../components/Posts';
import Post from '../components/Post';

const PostStack = createStackNavigator({
  Posts: {
    screen: Posts,
  },
  Post: {
    screen: Post,
  },
});

export default createAppContainer(PostStack);
