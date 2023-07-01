import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { TagIcon } from "react-native-heroicons/solid";
import { inaRushData } from '../Data/InaRushData';
import { useNavigation } from '@react-navigation/native';

const InaRush = () => {

const [rush, setRush] = useState(inaRushData)
const navigation = useNavigation()

  return (
   
    <View className='mr-3 flex-row'>
     {rush?.map((item, idx) => (
      <TouchableOpacity className='mr-3 flex-row gap-6' key={idx}
      onPress={() => {navigation.navigate('Restaurant', {item} )}}>
      <View>
         <Image
       source={{uri:item.image}}
       className='h-36 w-[270px] rounded-sm'
       />
       <View className='px-3 pb-4'>
         <Text className='font-medium text-base pt-2'>{item.name} ({item.address})</Text>
         <View className='flex-row items-center space-x-1 justify-between'>
             <View className='flex-row items-center space-x-1'>
             <TagIcon color='#DAA520' size={17}/>
             <Text className='font-bold text-gray-500'>·</Text>
             <Text className='text-xs text-gray-500'>${item.fee} Delivery Fee</Text>
             <Text className='font-bold text-gray-500'>·</Text>
             <Text className='text-xs text-gray-500'>{item.time}min</Text>
             </View>
             <View className='rounded-full overflow-hidden'>
             <Text className='text-[10px] bg-gray-200 p-1 font-medium'>
             {item.rating}
             </Text>
             </View>
         </View>
         </View>
       </View>
     </TouchableOpacity>
      
     ))}
   
     </View>
  )
  
}


export default InaRush