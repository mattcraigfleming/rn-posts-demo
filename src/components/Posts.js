import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {getPosts} from '../reducers';

const Posts = () => (
  <View>
    <Text>Posts</Text>
  </View>
);

const mapStateToProps = ({posts}) => ({
  posts,
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, {getPosts})(Posts);
