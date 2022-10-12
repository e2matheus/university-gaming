import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomButton = ({ text, onPress, disabled = false }) => {

  const aditionalStyles = disabled ? styles.disabledText : {};

  return (
    <View style={styles.container}>
      <Text style={{...styles.mainText, ...aditionalStyles}} onPress={onPress} disabled={disabled}>{text}</Text>
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
  },
  disabledText: {
    borderColor: '#000',
    backgroundColor: '#55BCF6',
    color: '#000',
    opacity: 0.8,
  },
});

export default CustomButton;
