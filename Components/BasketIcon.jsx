import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../Features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotal = useSelector(selectBasketTotal)

    if (items.length === 0) return null
  return (
    <View className='absolute bottom-10 w-full z-50 h-[60px]'>
      <TouchableOpacity className='bg-black mx-5 p-4 rounded-lg flex-row items-center space-x-1'
      onPress={() => {navigation.navigate('Basket')}}>
        <Text className='text-white font-bold text-lg  px-2'>{items.length}</Text>
        <Text className='text-white flex-1 font-bold text-lg text-center'>View Basket</Text>
        <Text className='text-white font-bold'>$ {basketTotal}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon