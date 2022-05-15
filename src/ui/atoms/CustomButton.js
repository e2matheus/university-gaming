import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomButton = ({ text }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    padding: 5,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    fontWeight: 'bold',
  }
});

export default CustomButton;
