import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
var _ = require('lodash');
function OrderList({list,onPress,style,textStyle,onPressIndex,customIndexItem,objectPath}) {

  const [listItem, setListItem] = useState([]);
  const [arrayItem, setArrayItem] = useState([]);
  const [alphabetArray, setAlphabetArray] = useState([]);
  const [temp, setTemp] = useState(0);
  const [objPath,setObjPath] = useState("");
  
  let respArray = [];

  const orderList = (listToOrder) => {
    listToOrder.sort((a, b) => a.text.localeCompare(b.text));
    return list;
  };

  const addAlphabet = (liste) => {
    let array = [{ text: "A", index: 0 }];
    let test = liste;
    let number = 0;
    for (let i = 1; i <= liste.length; i++) {
      let value1 = _.get(test[i - 1],objPath)
      let value2 = _.get(test[i],objPath)
      console.log(value1?.substring(0,1),value2?.substring(0,1));
       if (value1?.substring(0, 1) != value2?.substring(0, 1)) {
        number++;
        console.log(i)
        array.push({
          text: value2?.substring(0, 1),
          index: i + 1,
        });
      }
    }
    return array;
  };

  const addAlphabetToList = (liste) => {
    respArray = listItem;
    let number = 0;
    for (let i = 0; i < liste.length; i++) {
      number++;
      respArray.splice(liste[i].index + i, 0, customIndexItem != null ? { text: liste[i].text }:{ text: liste[i].text });
    }     
    return respArray.slice(1);
  };
  useEffect(() => {
    setListItem(orderList(list));
    setTemp(1);
    setObjPath(Object.getOwnPropertyNames(list[0])[0])
  }, []);
  useEffect(() => {
    // addAlphabet(orderList(list))
    //console.log(objPath);
    setAlphabetArray(addAlphabet(listItem));
  }, [temp]);
  useEffect(() => {
    setArrayItem(addAlphabetToList(alphabetArray));
  }, [alphabetArray]);

  const renderItem = ({ item , index }) => <TouchableWithoutFeedback onPress={(item.text)?.length <2 ? onPressIndex :onPress}><Text style={textStyle}>{item?.text}</Text></TouchableWithoutFeedback>;

  return (
      <View style={[styles.container,style]}>
      <FlatList
        data={arrayItem}
        //keyExtractor={(item)=> item?.number.toString()}
        renderItem={renderItem}
        contentContainerStyle={style}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
});

export default OrderList;
