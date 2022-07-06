import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UniversityList from '../UniversityList/UniversityList';
import UniversityDetails from '../UniversityDetails/UniversityDetails';

const Stack = createNativeStackNavigator();
const CoreStackNavigator = () => (
  <Stack.Navigator initialRouteName="UniversityList" >
    <Stack.Screen name="UniversityList" component={UniversityList} />
    <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
  </Stack.Navigator>
)

export default CoreStackNavigator;
