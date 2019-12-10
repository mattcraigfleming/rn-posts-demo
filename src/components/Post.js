import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import axios from 'axios';
import {fetchAuthor} from '../actions';

export default function Post() {
  const dispatch = useDispatch();

  //Declare initial Loading Variables
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const postsReducer = useSelector(state => state.postsReducer);
  const {posts, author} = postsReducer;
  console.log(author);

  // id - 1 as posts array is 0 based
  const id = useNavigationParam('id') - 1;

  useEffect(() => getAuthor(), []);

  // Retrieve Posts Data
  const getAuthor = () => {
    setIsFetching(true);
    let url = `http://jsonplaceholder.typicode.com/users?id=${id}`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => dispatch(fetchAuthor(data)))
      .catch(error => alert(error.message))
      .finally(() => setIsFetching(false));
  };

  if (isFetching) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator animating={true} />
      </View>
    );
  } else {
    return (
      <View>
        <Text>Post Details Screen</Text>
        <Text>Title: {posts[id].title}</Text>
        <Text>Body: {posts[id].body}</Text>
        <Text>Author: {author[0].name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  row: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },

  title: {
    fontSize: 15,
    fontWeight: '600',
  },

  description: {
    marginTop: 5,
    fontSize: 14,
  },
});
