import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'

const WaitingScreen = () => {

const navigation = useNavigation()

useEffect(() => {
    setTimeout(() => {
        navigation.navigate('Delivery')
    }, 3000);
}, [])

  return (
    <SafeAreaView className= 'bg-black flex-1 justify-center items-center'>
      <Animatable.Text
      animation='slideInUp'
      iterationCount={1}
      className='text-white font-medium text-lg mb-4'>
      Placing your order
      </Animatable.Text>

    <View>
      <Progress.Bar indeterminate={true} width={200} color='white'/>
      </View>
    </SafeAreaView>
  )
}

export default WaitingScreen