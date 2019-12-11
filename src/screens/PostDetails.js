import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {fetchAuthors} from '../actions';

export default function PostDetails() {
  const dispatch = useDispatch();

  //Declare initial Loading Variables
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const postsReducer = useSelector(state => state.postsReducer);
  const {posts, author} = postsReducer;
  console.log(author);

  // id - 1 as posts array is 0 based
  const id = useNavigationParam('id') - 1;

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        getAuthor();
      }
    });
  }, []);

  // Retrieve Author Data via ID
  const getAuthor = () => {
    setIsFetching(true);
    let url = `http://jsonplaceholder.typicode.com/users`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => dispatch(fetchAuthors(data)))
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
      <>
        <View style={styles.row}>
          <Text style={styles.title}>{posts[id].title}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.description}>{posts[id].body}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.authorName}>
            {author[posts[id].userId - 1].name},
          </Text>
          <Text style={styles.authorEmail}>
            {author[posts[id].userId - 1].email}
          </Text>
        </View>
      </>
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
    padding: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    marginTop: 5,
    fontSize: 14,
  },
  authorName: {
    fontSize: 12,
    lineHeight: 18,
    color: 'grey',
    fontWeight: '600',
  },
  authorEmail: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '600',
  },
});
