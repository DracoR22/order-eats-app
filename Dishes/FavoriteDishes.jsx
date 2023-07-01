import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/solid'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItems, selectBasketItemsWithId } from '../Features/basketSlice'

const FavoriteDishes = ({item}) => {
    
    const [isPressed, setIsPressed] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector((state) => selectBasketItemsWithId(state, item.id)) || [];
    
    const addItemToBasket = () => {
        dispatch(addToBasket({ item }))
      };
      
      const removeItemFromBasket = () => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id: item.id}))
      }
      
    
  return (
    <>
    <TouchableOpacity className='bg-white p-4' onPress={() => setIsPressed(!isPressed)}>
    <View>

         {/* Dish 1 */}

        <View className='flex-row' >
         <View className='flex-1'>
         <Text className='text-lg pb-1'>{item.dish1}</Text>
         <Text>${item.price1} • <Text className='text-gray-400'>{item.calories1} Cal.</Text> </Text>
         <Text className='text-gray-400 pt-2'>{item.dishdes1}</Text>
         </View>
         <View>
            <Image source={{uri: item.dishimg1}}
            className='h-[110px] w-[110px] bg-gray-300 p-4'
            style={{borderWidth: 1, borderColor: '#F3F3F4'}}/>
         </View>
         </View> 

         {isPressed && (
        <View className='px-4 bg-gray-200 w-[140px] h-10 rounded-full mt-1'>
            <View className='flex-row items-center space-x-2 py-[5px]'>
                <TouchableOpacity onPress={removeItemFromBasket}>
                    <MinusIcon color={'black'} size={30}/>
                </TouchableOpacity>

                <Text className='px-3'>{items?.length}</Text>

                <TouchableOpacity onPress={addItemToBasket}>
                  <PlusIcon color={'black'} size={30}/>
                   </TouchableOpacity>
            </View>
        </View>

    )}
   

    </View>
   
 

    </TouchableOpacity>
    </>
   
  )
}

export default FavoriteDishes