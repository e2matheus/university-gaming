import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import University from '../University';
import universitiesApi from '../../api/client';


const UniversityList = ({ navigation }) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    loadUniversities();
  }, []);

  const loadUniversities = async () => {
    const response = await universitiesApi.getUniversities();

    if(!response.ok) {
      console.log('Server error: ', response.problem);
    } else {
      console.log('Response data: ', response.data.name);
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.universitiesWrapper}>
        <Text style={styles.sectionTitle}>Today's universities</Text>
        <View style={styles.items}>
          <University title="University 1" navigation={navigation} />
          <University title="Sevilla University" country="Spain" navigation={navigation} />
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
export default UniversityList;
