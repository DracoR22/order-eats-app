import { View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ArrowLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/solid'
import { DrinksData } from '../Data/DrinksData'
import { FavoritesData } from '../Data/FavoritesData'
import { inaRushData } from '../Data/InaRushData'
import { VerticalColData } from '../Data/VerticalColData'
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {

const navigation = useNavigation()
const [data, setData] = useState([...DrinksData, ...FavoritesData, ...inaRushData, ...VerticalColData])
const [searchText, setSearchText] = useState('')

  return (
    <SafeAreaView className='my-5'>
      <View className='mx-4 flex-row items-center space-x-2 pb-3'>
      <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-full'
      >
          <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
           <ArrowLeftIcon color='black' size={20}/>
           </TouchableOpacity>
           <TextInput placeholder='Food, groceries, drinks, etc' keyboardType='default'
           onChangeText={(value) => setSearchText(value)} />
            </View>

      </View>

      <View className='px-5 py-5'>
        <Text className='text-lg font-bold'>All</Text>
      </View>

  
    <ScrollView>

   {data.filter((value)=>{
    if(searchText === '') {
        return value
    } else if(
        value.dish1 && value.dish1.toLowerCase().includes(searchText.toLowerCase()) ||
        value.name && value.name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return value
        }
      })

   .map((item, index) => (
    <View key={index} className='px-4'>

     <TouchableOpacity className='py-5' onPress={() => {navigation.navigate('Restaurant', {item})}}>
     <Text className='pl-3'><MagnifyingGlassIcon size={12} color={'black'}/> {item.dish1}</Text>
     </TouchableOpacity>
      
      <TouchableOpacity className='py-5'>
     <Text className='pl-3' onPress={() => {navigation.navigate('Restaurant', {item})}}><MagnifyingGlassIcon size={12} color={'black'}/> {item.name}</Text>
     </TouchableOpacity>
    </View>
   ))}

    </ScrollView>

    </SafeAreaView>
  )
}

export default SearchScreen