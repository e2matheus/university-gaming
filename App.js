import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UniversityList from './src/components/UniversityList/UniversityList';
import UniversityDetails from './src/components/UniversityDetails/UniversityDetails';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="UniversityList" >
    <Stack.Screen name="UniversityList" component={UniversityList} />
    <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
