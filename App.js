import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Apiweb from './Sventanas/Apiweb'

import Navigator from './Navigators/Navigator';

import Apps from './Screens/Apps';

import { createStackNavigator } from '@react-navigation/stack'

import Mains from './Screens/Mains';




const Tab = createBottomTabNavigator();

const Stack = createStackNavigator()



export default function App() {
  return (
    
    <NavigationContainer>
          
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'PVF APPS') {
              iconName = focused
                ? 'home'
                : 'home-sharp';
            } else if (route.name === 'Conocenos') {
              iconName = focused ? 'people-sharp' : 'person-circle';
            }
            else if (route.name === 'Api') {
              iconName = focused ? 'bug' : 'bug-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
          headerShown: false,
        })}
      >
        <Tab.Screen name="PVF APPS"   component={Navigator} options={{headerShown:false}}  />
      
        <Tab.Screen name="Api" component={Apiweb}  />
      </Tab.Navigator>
      
       </NavigationContainer>
       

  );
  
}


     