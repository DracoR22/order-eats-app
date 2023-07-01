import { StatusBar } from 'react-native';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import RestaurantScreen from './Screens/RestaurantScreen';
import BasketScreen from './Screens/BasketScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import WaitingScreen from './Screens/WaitingScreen';
import DeliveryScreen from './Screens/DeliveryScreen';
import SearchScreen from './Screens/SearchScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
       <StatusBar barStyle="dark-content" />
  <Stack.Navigator>

  <Stack.Screen name="Home" component={HomeScreen} />

  <Stack.Screen name="Restaurant" component={RestaurantScreen}
   options={{presentation: 'modal', headerShown:false}} />

  <Stack.Screen name="Basket" component={BasketScreen}
  options={{presentation: 'modal', headerShown: false}} />

<Stack.Screen name="Wait" component={WaitingScreen}
options={{presentation: 'fullScreenModal', headerShown: false}} />

<Stack.Screen name="Delivery" component={DeliveryScreen}
options={{presentation: 'fullScreenModal', headerShown: false}} />

<Stack.Screen name="Search" component={SearchScreen}
options={{presentation: 'modal', headerShown: false}} />

  </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

