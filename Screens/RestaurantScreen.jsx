import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { StarIcon, TagIcon, XMarkIcon } from 'react-native-heroicons/solid';
import FavoriteDishes from '../Dishes/FavoriteDishes';
import BasketIcon from '../Components/BasketIcon';
import { StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../Features/restaurantSlice';
import OtherDishes from '../Dishes/OtherDishes';



const RestaurantScreen = ({route}) => {
    const { item } = route.params;
   const navigation = useNavigation()
   const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
      dispatch(setRestaurant({
        item
      }))
    }, [dispatch])

  return (
    <>
    
    <BasketIcon/>
    <ScrollView>
    <StatusBar backgroundColor="black" barStyle="light-content"/>
     <View className='relative'>
        <Image
        source={{uri: item.image}} className='w-full h-56 bg-white p-4'/>

        <TouchableOpacity className='absolute top-3 left-3 p-2 bg-gray-100 rounded-full'
         onPress={() => {navigation.navigate('Home')}}>
            <XMarkIcon size={30} color={'black'}/>
        </TouchableOpacity>
     </View>

     <View className='bg-white'>
      <View className='px-4 pt-4'>
        <Text className='text-3xl font-bold'>{item.name} ({item.address})</Text>
        <View className='flex-row space-x-2 my-1'>
           <View className='flex-row'>
            <View className='pr-2'>
            <StarIcon color='black' size={20}/>
            </View>
            <Text className='text-sm font-medium'>
                <Text className=''>{item.rating}</Text> · {item.genre} · $ · <TagIcon size={17} color='#DAA520' />
            </Text>
           </View>
        </View>
        <Text className='text-gray-500'>
        Delivery Time {item.time} min 
        </Text>
        <Text className='text-gray-500'>
        Delivery Fee ${item.fee} 
        </Text>
      </View>
     </View>
   
     <View className='bg-white'>
        <Text className='px-4 pt-6 mb-3 font-bold text-xl'>
            Featured Selection
        </Text>

      {/* DISHES ROWS  */}
      
       <FavoriteDishes item={item} />
       
       </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen