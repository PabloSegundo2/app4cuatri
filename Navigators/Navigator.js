


import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Apps from '../Screens/Apps'
import Mains from '../Screens/Mains'
import programa from '../Screens/programa'
import Edicion from '../Screens/Edicion'
import Videjuegos from '../Screens/Videojuego'

import Ofiice from '../Sventanas/Ofiice'
import Dropb from '../Sventanas/Dropb'
import Visual from '../Sventanas/Visual'
import Adobe from '../Sventanas/Adobe'
import Premier from '../Sventanas/Premier'
import Filmora from '../Sventanas/Filmora'

import AndroidS from '../Sventanas/AndroidS'
import Netbeans from '../Sventanas/Netbeans'
import Asana from '../Sventanas/Asana'
import Osu from '../Sventanas/Osu'
import Tlauncher from '../Sventanas/Tlauncher'
import Oficina from '../Sventanas/Oficina'

import Apiweb from '../Sventanas/Apiweb'


const Stack = createStackNavigator()

export default function Navigator(){
    return(
      

        <Stack.Navigator>
             <Stack.Screen
                name='Programas'
                component={Apps}
             />
              <Stack.Screen
                name=' Office'
                component={Mains}
             />
              <Stack.Screen
                name='Programa'
                component={programa}
             />
                <Stack.Screen
                name='Edicion'
                component={Edicion}
             />
                   <Stack.Screen
                name='Video'
                component={Videjuegos}
             />
                <Stack.Screen
                name='Paqueteria'
                component={Ofiice}
             />
                <Stack.Screen
                name='Dropp'
                component={Dropb}
             />
                 <Stack.Screen
                name='Code'
                component={Visual}
             />
             <Stack.Screen
                name='Adobe'
                component={Adobe}
             />
              <Stack.Screen
                name='Premier'
                component={Premier}
             />
              <Stack.Screen
                name='Filmora'
                component={Filmora}
             />
               
                <Stack.Screen
             name='Studio'
             component={AndroidS}
          />
               <Stack.Screen
             name='Java'
             component={Netbeans}
          />
             <Stack.Screen
             name='Asana'
             component={Asana}
          /> 
             <Stack.Screen
             name='Osu'
             component={Osu}
          />
          <Stack.Screen
             name='Mine'
             component={Tlauncher}
          /> 
         <Stack.Screen
          name='Officce'
          component={Oficina}
       />

            <Stack.Screen
          name='Appi'
          component={Apiweb}
       />
           
             
             

            </Stack.Navigator>
             
    )
}
