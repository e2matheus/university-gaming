import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import University from './src/components/University';
import UniversityDetailsCard from './src/components/UniversityDetailsCard/UniversityDetailsCard';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container} >
        <View style={styles.universitiesWrapper}>
          <Text style={styles.sectionTitle}>Today's universities</Text>
          <View style={styles.items}>
            <University title="University 1" />
            <University title="University 2" />
            <UniversityDetailsCard name="Sevilla University" country="Spain" aboutGaming="Unreal 5 Course" />
          </View>
        </View>
      </View>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  universitiesWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
});
export default App;
