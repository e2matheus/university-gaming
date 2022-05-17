import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UniversityDetailsCard from '../UniversityDetailsCard/UniversityDetailsCard';

const UniversityDetails = ({ title, name, country, aboutGaming }) => {
  return (
        <View style={styles.container} >
          <View style={styles.universitiesWrapper}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.items}>
              <UniversityDetailsCard name={name} country={country} aboutGaming={aboutGaming} />
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

export default UniversityDetails;
