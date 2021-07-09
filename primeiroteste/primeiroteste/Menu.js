import React, { Component } from 'react'
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native'
import parte1 from './assets/parte1.png'
import parte2 from './assets/parte2.png'

function Menu({navigation}){
    return (
        <>
         <TouchableOpacity onPress={()=>{ navigation.navigate("Principal")}}>
         <Image source={parte1} style={styles1.Image4}/>
         </TouchableOpacity>
         <View>
        <Image source={parte2} style={styles1.Image5}/>
        </View>
        </>

    )
}

const styles1 = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
  
    Image4:{
        width: '100%',
        height: 45
    },
    Image5:{

        width: '100%',
        height: '100%'
    }
  })



export default Menu;