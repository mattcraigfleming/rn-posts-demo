import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, ActivityIndicator} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import {fetchAuthors} from '../../actions';
import styles from './styles';

export default function PostDetails() {
  const dispatch = useDispatch();

  //Declare initial Loading Variables
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const postsReducer = useSelector(state => state.postsReducer);
  const {posts, author} = postsReducer;

  // id - 1 as posts array is 0 based
  const id = useNavigationParam('id') - 1;

  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        getAuthor();
      }
    });
  }, []);

  const getAuthor = async () => {
    setIsFetching(true);
    let url = 'http://jsonplaceholder.typicode.com/users';
    try {
      const response = await axios
        .get(url)
        .then(res => res.data)
        .then(data => dispatch(fetchAuthors(data)))
        .finally(() => setIsFetching(false));
      return response;
    } catch (e) {
      console.log(e.message);
    }
  };

  const RenderAuthor = () => {
    return (
      <>
        <Text style={styles.authorName}>
          {author[posts[id].userId - 1].name},
        </Text>
        <Text style={styles.authorEmail}>
          {author[posts[id].userId - 1].email}
        </Text>
      </>
    );
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
          {author ? <RenderAuthor /> : <Text>{''}</Text>}
        </View>
      </>
    );
  }
}
