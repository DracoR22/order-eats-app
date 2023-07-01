import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import RestaurantCards from './RestaurantCards'
import InaRush from './InaRush'

const FeaturedRow = ({id, title, description}) => {


  return (
    <View className='bg-white'>
      <View className='mt-8 flex-row items-center justify-between px-4'>
      <Text className='font-bold text-xl'>{title}</Text>
      <Text className='font-medium'>see all</Text>
      </View>
      <Text className='text-xs text-gray-500 px-4'>{description}</Text>

     <ScrollView horizontal
     contentContainerStyle={{paddingHorizontal: 15,}}
     showsHorizontalScrollIndicator={false}
     className='pt-5'>

    
        {/* Restaurant Cards */}
        <RestaurantCards />
        
     </ScrollView>

    </View>
  )
}

export default FeaturedRow