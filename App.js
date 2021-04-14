import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderList from './src/component/orderList';

export default function App() {
  let list = [
    {
      text: "Anvers",
    },
    {
      text: "Averbode",
    },
    {
      text: "Bruxelles",
    },
    {
      text: "Bruges",
    },
    {
      text: "Mons",
    },
    {
      text: "Maredsous",
    },
    {
      text: "Moinil",
    },
    {
      text: "Namur",
    },
    {
      text: "Liège",
    },
    {
      text:"Eghezee"
    },
    {
      text: "Leuze",
    },
    {
      text: "Namèche",
    },
    {
      text: "Nandrin",
    },
    {
      text: "Nanine",
    },
  ];
const text = 'text'
  return (
    <View style={styles.container}>
    <OrderList list={list} onPress={()=> console.log("hello")} textStyle={styles.text} objectPath={text}></OrderList>
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
  text:{
    color:"red"
  },
});
