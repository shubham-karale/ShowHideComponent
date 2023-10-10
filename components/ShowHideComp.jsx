import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ShowHideComp = () => {
  return (
    <View>
      <Text style = {styles.heading}>ShowHideComp</Text>
    </View>
  )
}

export default ShowHideComp

const styles = StyleSheet.create({
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        marginTop : 20,
        color : 'darkblue'
    },
})