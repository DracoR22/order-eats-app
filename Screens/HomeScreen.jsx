import React, { useEffect, useLayoutEffect, useState } from 'react'
import { SafeAreaView, Text, View, Image, TextInput, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from "react-native-heroicons/outline"; 
import Categories from '../Components/Categories';
import FeaturedRow from '../Components/FeaturedRow';
import 'url-search-params-polyfill';
import InaRushRow from '../Components/InaRushRow';
import VerticalRow from '../Components/VerticalRow';




const HomeScreen = () => {
   
    const navigation = useNavigation();
     
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])

    
      

    return (
      <SafeAreaView className='bg-white'>
        
        {/* Header */}
        <View className='mx-4 p-4 flex-row space-x-2 pb-3'>

            <View className='flex-1'>
       <Text className='text-gray-400 text-sm '>
         Deliever now
        </Text>
       <Text className='font-medium text-base'>Current Location
       <ChevronDownIcon size={20} color='black' className=''/>
       </Text>
             
       </View>
       <TouchableOpacity>
       <Image source={{uri:'http://icons.iconarchive.com/icons/google/noto-emoji-food-drink/1024/32376-pancakes-icon.png',}}
       className='h-8 w-8 bg-black rounded-full'/>
       </TouchableOpacity>
       </View>
        {/* Search */}
        
        <TouchableOpacity activeOpacity={1.0} className='mx-4 flex-row items-center space-x-2 pb-3' onPress={() => {navigation.navigate('Search')}}>
              
            <View className='flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-full' >
           <MagnifyingGlassIcon color='black' size={20}/>
           <Text className='text-gray-400 pt-[2px]'>Food, groceries, drinks, etc </Text> 
           </View>
           <AdjustmentsHorizontalIcon color='black'/>
            
        </TouchableOpacity>
        
       {/* Content */}
       <ScrollView className='bg-gray-100' >
      
       

       {/* Favorites */}

        <FeaturedRow
        title='Your Favorites'/>

        {/* Categories */}

         <Categories name='Categories'/>

       {/* In a Rush? */}
       <InaRushRow title='In a Rush?' description='Here´s the fastest delievery for you'/>
      
        {/* Verical Row */}
    
        <VerticalRow title='Only on Order Eats'/>
        {/* Daily Offers */}
  

       </ScrollView>
      </SafeAreaView>
    )
  
}

export default HomeScreen




