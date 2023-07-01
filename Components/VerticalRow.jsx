import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import Vertical from './Vertical'


const VerticalRow = ({title, description}) => {
  return (
    <View className='bg-white'>
    <View className='mt-8 flex-row items-center justify-between px-4'>
    <Text className='font-bold text-xl'>{title}</Text>

    </View>
    

   <ScrollView Vertical
   contentContainerStyle={{paddingHorizontal: 15,}}
   showsVerticalScrollIndicator={false}
   className='pt-5'>

  
      {/* Restaurant Cards */}
      <Vertical />
      
   </ScrollView>

  </View>
  )
}

export default VerticalRow