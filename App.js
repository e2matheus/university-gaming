import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import CoreStackNavigator from './src/components/Routes/CoreStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <CoreStackNavigator />
    </NavigationContainer>
  );
};

export default App;
