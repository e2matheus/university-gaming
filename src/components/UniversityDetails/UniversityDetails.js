import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import UniversityDetailsCard from '../UniversityDetailsCard';
import CustomBackButton from '../../ui/atoms/CustomBackButton';

const UniversityDetails = ({ title, name, country, aboutGaming, route, closeToast, navigation }) => {
  const universityTitle = title ? title : route.params.name;
  const universityName = name ? name : route.params.name;
  const universityCountry = country ? country : route.params.country;

  const courseName = route.params.aboutGaming ? route.params.aboutGaming : "No infomation yet";
  const universityGaming = aboutGaming ? aboutGaming : courseName;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <CustomBackButton onPress={() => {
        closeToast();
        navigation.goBack();
      }}/>,
    });
  }, [navigation]);

  return (
        <View style={styles.container} >
          <View style={styles.universitiesWrapper}>
            <Text style={styles.sectionTitle}>{universityTitle}</Text>
            <View style={styles.items}>
              <UniversityDetailsCard name={universityName} country={universityCountry} aboutGaming={universityGaming} navigation={navigation} />
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
