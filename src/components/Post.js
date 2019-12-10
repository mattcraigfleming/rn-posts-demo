import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useNavigationParam} from 'react-navigation-hooks';

export default function Post() {
  const id = useNavigationParam('id');
  console.log(id);
  return (
    <View>
      <Text>Post Screen</Text>
    </View>
  );
}
