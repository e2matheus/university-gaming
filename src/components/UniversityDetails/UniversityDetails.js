import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UniversityDetailsCard from '../UniversityDetailsCard/UniversityDetailsCard';

const UniversityDetails = ({ title, name, country, aboutGaming, route }) => {
  const universityTitle = title ? title : route.params.name;
  const universityName = name ? name : route.params.name;
  const universityCountry = country ? country : route.params.country;

  const courseName = universityName.includes('Sevilla') ? "Unreal 5 Course" : "No infomation yet";
  const universityGaming = aboutGaming ? aboutGaming : courseName;
  return (
        <View style={styles.container} >
          <View style={styles.universitiesWrapper}>
            <Text style={styles.sectionTitle}>{universityTitle}</Text>
            <View style={styles.items}>
              <UniversityDetailsCard name={universityName} country={universityCountry} aboutGaming={universityGaming} />
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
