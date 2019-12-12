/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {FlatList, View, Text, ActivityIndicator} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import axios from 'axios';
import {fetchPosts} from '../../actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

export default function Posts(props) {
  const dispatch = useDispatch();

  //Declare initial Loading Variables
  const [isFetching, setIsFetching] = useState(false);

  //Access Redux Store State
  const postsReducer = useSelector(state => state.postsReducer);
  const {posts} = postsReducer;

  const {navigate} = useNavigation();

  // Acts as componentDidMount with empty array
  useEffect(() => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        getPosts();
      }
    });
  }, []);

  // Retrieve Posts Data
  const getPosts = () => {
    setIsFetching(true);
    let url = 'http://jsonplaceholder.typicode.com/posts';
    axios
      .get(url)
      .then(res => res.data)
      .then(data => dispatch(fetchPosts(data)))
      .catch(error => alert(error.message))
      .finally(() => setIsFetching(false));
  };

  // Render of FlatList item
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigate('PostDetails', {id: item.id})}>
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
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
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => `flat_${index}`}
      />
    );
  }
}
