import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Toast = ({ type = 'info', message = 'Message', isVisible = false }) => {
  const toastColorProperties = {
    info: {
      backgroundColor: '#5BC0DC',
    },
    success: {
      backgroundColor: '#5CB85C',
    },
    error: {
      backgroundColor: '#DC3545',
    },
  };
  const toastHeight = isVisible ? '15%' : 0;

  return (
    <View style={[styles.container, ...[{
      backgroundColor: toastColorProperties[type].backgroundColor,
      height: toastHeight,
    }]]} >
      {!isVisible || 
        <View style={styles.wrapper}>
          <Text style={styles.sectionTitle}>{message}</Text>
        </View>
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    elevation: 1,
  },
  wrapper: {
    padding: 14,
    paddingTop: 75,
    marginLeft: 8,
    textAlign: 'center',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
Toast.propTypes = {
  type: PropTypes.string,
  isVisible: PropTypes.bool,
};
export default Toast;
