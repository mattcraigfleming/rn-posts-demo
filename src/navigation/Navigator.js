import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Posts from '../screens/Posts/Posts';
import PostDetails from '../screens/PostDetails/PostDetails';

const PostStack = createStackNavigator({
  Posts: {
    screen: Posts,
  },
  PostDetails: {
    screen: PostDetails,
  },
});

export default createAppContainer(PostStack);
