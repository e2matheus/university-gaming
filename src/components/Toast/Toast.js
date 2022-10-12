import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Toast = ({ type = 'info', message = 'Message', isVisible = false }) => {
  const toastProperties = {
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

  return (
    <View style={[styles.container, ...[{ backgroundColor: toastProperties[type].backgroundColor }]]} >
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
    top: '12%',
    left: '4%',
    right: '4%',
    zIndex: 1,
    elevation: 1,
  },
  wrapper: {
    padding: 14,
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
