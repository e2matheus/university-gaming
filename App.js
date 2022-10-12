import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import store from './src/store';
import Toast from './src/components/Toast';
import CoreStackNavigator from './src/components/Routes/CoreStackNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <Toast />
      <NavigationContainer>
        <CoreStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
