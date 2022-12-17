import React, { useState } from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList, SafeAreaView } from 'react-native';
import { getAllContact,addContact,deleteAllContacts,deleteItem } from './realm';

export default function App() {
  const [givenName,setGivenName] = useState('')
  const [familyName,setFamilyName] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [contacts,setContacts] = useState(getAllContact)
  const [count,setCount] = useState(contacts.length+1)

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text>{item.recordID}</Text>
      <View style={{marginRight:5,width:'50%'}}>
        <Text>{item.givenName}</Text>
        <Text>{item.familyName}</Text>
      </View>
      <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-end',}}>
        <Text style={{marginRight:8}}>{item.phoneNumber}</Text>
        <Button title='delete' onPress={()=>{
          deleteItem(item)
          setContacts(getAllContact)
        }} />
      </View>
      
    </View>

  );

  return (
    
      <View style={styles.container}>
        <TextInput style={styles.title} placeholder="Enter name" onChangeText={e=>setGivenName(e)} />
        <TextInput style={styles.title} placeholder="Enter family name" onChangeText={e=>setFamilyName(e)} />
        <TextInput style={styles.title} placeholder="Enter phone number" onChangeText={e=>setPhoneNumber(e)} />
        <View style={styles.btnContainer}>
          <Button title='Add' onPress={()=>{
            console.log(givenName)
            console.log(familyName)
            addContact(givenName,familyName,phoneNumber,count.toString())
            setCount(count+1)
            setContacts(getAllContact)
          }} />
          <Button title='Delete all' color='red' onPress={()=>{
             deleteAllContacts();
             setContacts(getAllContact);
             setCount(1)
            }} />
        </View>

        
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={item => item.recordID}
           />
        
       
        
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  title:{
    width:'100%',
    height:50,
    borderWidth:1,
    borderColor:'#000',
    borderRadius:5,
    paddingLeft:20,
    marginTop:10,
  },
  btnContainer:{
    height:100,
    width:'100%',
    justifyContent:'space-between',
    marginTop:10,
  },
  itemContainer:{
    height:60,
    width:'100%',
    backgroundColor:'#eee',
    alignItems:'center',
    justifyContent:'center',
    marginTop:5,
    flexDirection:'row',
    padding:8
  }
});
