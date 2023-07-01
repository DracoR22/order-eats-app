
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TagIcon } from "react-native-heroicons/solid";
import { VerticalColData } from '../Data/VerticalColData';
import { useNavigation } from '@react-navigation/native';

const Vertical = () => {

const [vertical, setVertical] = useState(VerticalColData)
const navigation = useNavigation()

  return (
<View className='mr-3 flex-col items-center pb-36'>
     {vertical?.map((item, idx) => (
      <TouchableOpacity className='mr-3 flex-row gap-6' key={idx}
      onPress={() => {navigation.navigate('Restaurant', {item} )}}>
      <View>
         <Image
       source={{uri:item.image}}
       className='h-36 w-[380px] rounded-sm ml-5'
       />

       <View className='px-5 pb-4'>

         <Text className='font-medium text-base pt-2'>{item.name} ({item.address})</Text>

         <View className='rounded-full overflow-hidden w-[25px]'>
             <Text className='text-[10px] bg-gray-200 p-1 font-medium'>
             {item.rating}
             </Text>

             </View>

         <View className='flex-row items-center space-x-1 justify-between'>
             <View className='flex-row items-center space-x-1'>
             <TagIcon color='#DAA520' size={17}/>
             <Text className='font-bold text-gray-500'>·</Text>
             <Text className='text-xs text-gray-500'>${item.fee} Delivery Fee</Text>
             <Text className='font-bold text-gray-500'>·</Text>
             <Text className='text-xs text-gray-500'>{item.time}min</Text>
             </View>
            
         </View>
         </View>
       </View>
     </TouchableOpacity>
      
     ))}
   
     </View>
  )
}

export default Vertical