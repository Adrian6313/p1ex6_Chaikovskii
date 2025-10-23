import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.red} />
      <View style={styles.green} />
      <View style={styles.red} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  red: {
    flex: 3, // 3/8 высоты
    backgroundColor: 'red',
  },
  green: {
    flex: 2, // 2/8 = 1/4 высоты
    backgroundColor: 'green',
  },
});