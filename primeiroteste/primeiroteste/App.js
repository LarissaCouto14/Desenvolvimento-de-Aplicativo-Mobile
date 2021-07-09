import React, { Component } from 'react'
import Principal from './Principal'
import 'react-native-gesture-handler';
import{NavigationContainer} from '@react-navigation/native';
import{createStackNavigator} from '@react-navigation/stack'
import Menu from './Menu'


const Stack = createStackNavigator();

function App () {
      return(
        <>
        <NavigationContainer>
      <Stack.Navigator  headerMode="none">
      <Stack.Screen name="Principal" component={Principal} options={{tabBarVisible: false}}/>
        <Stack.Screen name="Menu" component={Menu} options={{tabBarVisible: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </>
  )
}



export default App;