import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import CalculatorScreen from './src/screens/CalculatorScreen'
import { styles } from './src/styles/AppStyle';

const App = () => {
  return (
    <SafeAreaView style={styles.fund}> 
      <StatusBar backgroundColor={'black'} barStyle='light-content'/>
      <CalculatorScreen />
    </SafeAreaView>
  )
}


export default App
