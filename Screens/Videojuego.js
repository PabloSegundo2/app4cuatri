import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Un videojuego es una aplicación interactiva orientada al entretenimiento que, a través de ciertos mandos o controles, permite simular experiencias en la pantalla de un televisor, una computadora u otro dispositivo electrónico</Title>
  
      <Card>
    <Card.Content>
    <Title>Osu!</Title>
   
        <Card.Cover source={{ uri: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/08/12/15656180125087.jpg' }} />
      <Paragraph>osu! es un videojuego de ritmo gratuito desarrollado, publicado y creado principalmente por Dean "peppy" Herbert, escrito en C# en el framework .NET.​</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Osu')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
   
      <Title>Tlancher</Title>
        <Card.Cover source={{ uri: 'https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/1e3e961e-69c6-4059-befc-5e036db98548/2772185032/tlauncher-tl-3.webp' }} />
      <Paragraph> TLauncher es un lanzador que nació como alternativa al lanzador original de Minecraft,  </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Mine')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
    <Title>pc building simulator </Title>
        <Card.Cover source={{ uri: 'https://cdn1.epicgames.com/offer/8f5f5eff22f3468fa5551771406fc868/EGS_PCBuildingSimulator_TheIrregularCorporation_S1_2560x1440-053592d64b04adff6734a480dcead96d' }} />
      <Paragraph>PC Building Simulator es un videojuego de simulación y estrategia </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Studio')}>Ver mas..</Button>
    </Card.Actions>

    </Card>

    </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      backgroundColor: 'gray',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    
  });