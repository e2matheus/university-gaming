import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';

const CustomBackButton = ({ title, onPress, titleStyle, navigation }) => {
  console.log('Header back button:', navigation);
  return (
    <View style={styles.container}>
      <HeaderBackButton style={{...styles.mainStyle, ...titleStyle}} onPress={onPress}>{title}</HeaderBackButton>
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    fontWeight: 'bold',
  },
});

export default CustomBackButton;
