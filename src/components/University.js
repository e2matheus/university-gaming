import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CustomButton from '../ui/atoms/CustomButton';

const University = ({ title, country = "US", aboutGaming = "", navigation }) => {
  const MAX_LETTERS_PER_TITLE = 21;
  const titleLettersTotal = title ? title.length : 0;
  const titleSetToFit = titleLettersTotal > MAX_LETTERS_PER_TITLE ? title.substring(0,MAX_LETTERS_PER_TITLE - 3) : title;
  const titleFragment = titleLettersTotal > MAX_LETTERS_PER_TITLE ? '...' : '';
  const titleToShow = title ? `${titleSetToFit}${titleFragment}` : '';

  return (
    <View style={styles.item}>
      <View style={styles.sectionLeft}>
        <View style={styles.logo}></View>
        <Text style={styles.mainText}>{titleToShow}</Text>
      </View>
      <View>
        <CustomButton text="Read More" onPress={() => navigation.navigate("UniversityDetails", { name: title, country, aboutGaming })}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  logo: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  mainText: {
    maxWidth: '80%',
  },
});

export default University;
