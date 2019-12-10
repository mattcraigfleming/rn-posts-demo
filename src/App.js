import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native'; // SafeAreaView for iOS version 11 or later https://facebook.github.io/react-native/docs/safeareaview
import {Provider} from 'react-redux';

import store from './store';
import Posts from './components/Posts';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.body}>
        <Posts />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;
