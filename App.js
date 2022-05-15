import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import University from './src/components/University';

const App = () => {
  return (
        <View style={styles.container} >
          <View style={styles.universitiesWrapper}>
            <Text style={styles.sectionTitle}>Today's universities</Text>
            <View style={styles.items}>
              <University title="University 1" />
              <University title="University 2" />
            </View>
          </View>
        </View>
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
