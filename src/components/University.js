import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const University = (props) => {

  return (
    <View style={styles.item}>
      <View style={styles.sectionLeft}>
        <View style={styles.logo}></View>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.sectionRight}></View>
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
  sectionRight: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default University;
