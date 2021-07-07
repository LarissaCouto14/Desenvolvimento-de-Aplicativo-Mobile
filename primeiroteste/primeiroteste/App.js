import React, { Component } from 'react'
import {StyleSheet, TouchableOpacity, Text, View, TouchableWithoutFeedback, Image} from 'react-native'
import Mc from './assets/mc.png'
import Segunda from './assets/segunda.png'
import Terceira from './assets/Terceira.png'


function App () {
      return(
        <>
      <View>
        <Image source={Mc} style={styles.Image}/> 
        </View>
        <View style={styles.container}>
        <Image source={Segunda} style={styles.Image1}/>
        </View>
        <View style={styles.container}>
        <Image source={Terceira} style={styles.Image2}/>
      </View>
    </>
      )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },

  Image:{
    width: '100%',
    height: 45,
},

 Image1:{
  width: '100%',
  height: '100%',

 },

 Image2:{
  width: '100%',
  height: '99%',
  backgroundColor: 'red',

 }
})

export default App;