import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { DrinksData } from '../Data/DrinksData'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = () => {

  const navigation = useNavigation()
  const [drinks, setDrinks] = useState(DrinksData)

  return (
   <View className='flex-row gap-3'>
   {drinks.map((item) => (
    <TouchableOpacity className='relative mr-2' key={item.id} onPress={() => navigation.navigate('Restaurant', {item})}>
        <Image source ={{
            uri: item.image
        }}
        className='h-20 w-20 rounded'
        />
      <Text className='font-medium pt-1 text-center'>{item.name}</Text>
    </TouchableOpacity>
   ))}
   </View>
  )
}

export default CategoryCard