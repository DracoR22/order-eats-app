import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../Features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../Features/basketSlice'
import { XMarkIcon } from 'react-native-heroicons/solid';
import { TrashIcon } from 'react-native-heroicons/outline';

const BasketScreen = () => {

const basketTotal = useSelector(selectBasketTotal)
const navigation = useNavigation()
const restaurant = useSelector(selectRestaurant)
const items = useSelector(selectBasketItems)
const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])
const dispatch = useDispatch()

useEffect(() => {
const groupedItems = items.reduce((results, item) => {
  (results[item.id] = results[item.id] || []).push(item);
  return results
}, {});

setGroupedItemsInBasket(groupedItems)
}, [items])


  return (
    <SafeAreaView>
      <View>
        <View>
           <View className='top-3 left-4'>
            <TouchableOpacity onPress={navigation.goBack}>
            <XMarkIcon size={30} color={'black'}/>
            </TouchableOpacity>
           </View>
          <View>
           <Text className='font-bold text-3xl pl-4 pt-6'>
            {restaurant?.item?.name} ({restaurant?.item?.address})
            </Text>
          </View>
        </View>

         <ScrollView className='h-[75%]'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={items[0].id}>
              <View className='flex-row pt-6 px-3'>
              <Text className='pr-2 text-green-500'>{items.length}x</Text>
              <Text className='font-medium flex-1'>{items[0].dish1.toUpperCase()}</Text>
              <Image
              source={{uri: (items[0]?.dishimg1)}}
              className='h-12 w-12'/>
               </View>

               <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: items[0].id}))}>
              <View className='pb-3 mx-4' >
                <TrashIcon color={'black'} size={30}/>
              </View>
            </TouchableOpacity>

            </View>
            
          ))}


          <View>
          <View className='flex-row pt-4 mx-3 border-t border-gray-300'>
            <Text className='flex-1 text-xl font-bold'>Subtotal</Text>
            <Text className='text-xl font-bold'>${basketTotal}</Text>
          </View>
          </View>

         </ScrollView>

       
         <TouchableOpacity className='border-t pt-3 border-gray-300' onPress={() => {navigation.navigate('Wait')}}>
          <View className='items-center mx-4'>
            <Text className='bg-black text-white w-full h-[50px]
             text-center pt-4 font-semibold text-[16px] rounded-lg' >
              Go to checkout
              </Text>
          </View>
        </TouchableOpacity>
        

      </View>

    </SafeAreaView>
  )
}

export default BasketScreen