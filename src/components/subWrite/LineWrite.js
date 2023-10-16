import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const LineWrite = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <View style={styles.textLine} />
    </View>
  );
};
const styles = StyleSheet.create({
  textLine: {
    borderTopWidth: 1,
    borderTopColor: 'gray',
    width: '95%',
    marginVertical: 10,
  },
});
export default LineWrite;
