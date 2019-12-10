/* eslint-disable no-alert */
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from 'react-navigation-hooks';
import axios from 'axios';
import {fetchPosts} from '../actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <TouchableOpacity onPress={() => navigate('Post', {id: item.id})}>
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
      <View style={{backgroundColor: '#F5F5F5', paddingTop: 20}}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item, index) => `flat_${index}`}
        />
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
