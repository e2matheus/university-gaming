import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import CoreStackNavigator from './src/components/Routes/CoreStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CoreStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
