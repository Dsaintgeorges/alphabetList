import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
function OrderList (){
const [listItem,setListItem] = useState([]);
const [arrayItem,setArrayItem]= useState([]);
const [alphabetArray,setAlphabetArray] = useState([]);
const [temp,setTemp]=useState(0);
    let list = [
        {
          text:"Anvers",
        },
        {
          text:"Averbode",
        },
        {
          text:"Bruxelles",
        },
        {
          text:"Bruges",
        },
        {
          text:"Mons",
        },
        {
          text:"Maredsous",
        },
        {
          text:"Moinil",
        },
        {
          text:"Namur",
        },
        {
          text:"Liège",
        },
        {
          text:"Leuze",
        },
        {
          text:"Namèche",
        },
        {
          text:"Nandrin",
        }
        ,
        {
          text:"Nanine",
        }
      ]

      
      let array = []
      let respArray =[]

      const orderList = (listToOrder)=>{
       listToOrder.sort((a, b) => a.text.localeCompare(b.text));
        return list
      }

      const addAlphabet = (liste) => {
       let array = []
       let test = liste
       console.log(test,"yaaalala");
        for (let i = 1; i<=liste.length;i++)
        {
            if(test[i-i]?.text.substring(0,1) != test[i]?.text.substring(0,1) )
            {
              console.log("hello");
                array.push({text:liste[i-1]?.text.substring(0,1),index: (i-1) == 0 ? (i-1) : i, })
            } 
            
        }
        console.log(array,"jeieoe,sis");
        return array
      }

      const addAlphabetToList = (liste)=>{
        respArray = listItem;
        console.log(liste,"je suis resparr");
        for(let i = 0 ; i<liste.length;i++)
        {
          respArray.splice(liste[i].index+i-1,0,{text : liste[i].text})
        }
          return respArray;
      }
      useEffect(()=>{
        setListItem(orderList(list))
        setTemp(1)
      },[])
    useEffect(()=>{
      // addAlphabet(orderList(list))
      console.log(listItem,"jz quiq listitme");
      setAlphabetArray(addAlphabet(listItem));
    },[temp])
    useEffect(()=>{
      setArrayItem(addAlphabetToList(alphabetArray))
    },[alphabetArray])


    const renderItem =({item,index})=>(
      
      <Text>{item?.text}</Text>
    )
    
    
    
    
      return (
        <View style={styles.container}>
         <FlatList
         data={arrayItem}
         //keyExtractor={(item)=> item?.number.toString()}
         renderItem={renderItem}>
    
         </FlatList>
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

export default OrderList;