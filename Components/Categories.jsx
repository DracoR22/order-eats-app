import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <View>
      <View className='bg-white px-4 pt-3'>
      <Text className='text-xl font-bold'>Drinks</Text>
      </View>
    <ScrollView 
    contentContainerStyle={{paddingHorizontal: 15,
    paddingTop: 15,}}
    horizontal
    showsHorizontalScrollIndicator={false} className='bg-white'>

        {/* CategoryCard */}

        <CategoryCard />
      
    </ScrollView>
    </View>
  )
}

export default Categories
