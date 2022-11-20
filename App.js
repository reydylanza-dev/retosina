import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const LotsOfStyles = () => {
    return (
      <View style={styles.container}>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 45,
  },
  red: {
    color: 'red',
  },
});

export default LotsOfStyles;
