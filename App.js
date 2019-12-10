import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    // SafeAreaView for iOS version 11 or later https://facebook.github.io/react-native/docs/safeareaview
    <SafeAreaView>
      <View style={styles.body}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
  },
});

export default App;
