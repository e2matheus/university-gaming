import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UniversityList from '../UniversityList';
import UniversityDetails from '../UniversityDetails';
import FavoriteList from '../FavoriteList';

const Stack = createNativeStackNavigator();
const CoreStackNavigator = () => (
  <Stack.Navigator initialRouteName="UniversityList" screenOptions={{
    title: 'University Gaming',
    headerBackTitle: null,
  }}>
    <Stack.Screen name="UniversityList" component={UniversityList} />
    <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
    <Stack.Screen name="FavoriteList" component={FavoriteList} />
  </Stack.Navigator>
)

export default CoreStackNavigator;
