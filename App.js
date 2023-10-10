import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import ShowHideComp from './components/ShowHideComp';
import React,{useState} from 'react';

export default function App() {

  const [show,setShow] = useState(true);
  /*
  To Show or Hide component we use the useState hooks of boolean type
  OnPressing show button component will print by changing the value of hooks to true and vice-versa for hide button
  
  
  */

  return (
   <>
     <View style = {styles.container}>
     <Button title="Show Component" onPress={()=>{setShow(true)}} />
      
     </View>

     <View style = {styles.container}>
     <Button title="Hide Component" 
     onPress={()=>{setShow(false)}}
     
     
     />
     
     </View>

     {
      show ? <ShowHideComp/> : null
     }

   </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
    
  },
  
  
});
