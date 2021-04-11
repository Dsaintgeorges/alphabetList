import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderList from './src/component/orderList';

export default function App() {


  return (
    <View style={styles.container}>
    <OrderList></OrderList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    alignSelf:"center"
  },
});
