import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../Features/restaurantSlice'
import { StatusBar } from 'expo-status-bar'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import * as Progress from 'react-native-progress'
import MapView from 'react-native-maps'

const DeliveryScreen = () => {

    
const navigation = useNavigation()
const restaurant = useSelector(selectRestaurant)

  return (
    <View className=' relative flex-1'>
        <StatusBar backgroundColor="#000000" barStyle="dark-content"/>
    <SafeAreaView className='z-50'>


      <TouchableOpacity onPress={() => {navigation.navigate('Home')}} className='p-4'>
        <ArrowLeftIcon size={30} color={'black'}/>
      </TouchableOpacity>

     <View className='px-4 pb-4'>
        <View>
            <Text className='text-lg pb-1'>{restaurant.item.name} Estimated Arrival</Text>
            <Text className='text-3xl mb-2 font-medium'>{restaurant.item.time} Minutes</Text>
        </View>
        <Progress.Bar indeterminate={true} width={200} color='black'/>

     </View>

     


    </SafeAreaView>


    <MapView
     initialRegion={{
        latitude: 40.776676,
        longitude: -73.971321,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
     }}
     className='flex-1 top-0 left-0 right-0 bottom-0'
     mapType='mutedStandard'>

     </MapView>
     

    </View>
  )
}

export default DeliveryScreen