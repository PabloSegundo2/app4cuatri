import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea.</Title>
  
      <Card>
    <Card.Content>
    <Title>Adobe Premiere Pro</Title>
   
        <Card.Cover source={{ uri: 'https://static.hooksounds.com/uploads/2022/02/photo-1574717024653-61fd2cf4d44d-740x600.jpeg' }} />
      <Paragraph>Está orientado a la edición de vídeos profesionales</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Premier')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
   
      <Title>Filmora</Title>
        <Card.Cover source={{ uri: 'https://www.usastreams.com/wp-content/uploads/2021/06/78.png' }} />
      <Paragraph> Filmora es un excelente editor de vídeo para Windows y macOS  </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Filmora')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
    <Title>Video </Title>
        <Card.Cover source={{ uri: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1325400/ss_5d7011beae90cf4a0c8eac384a77981a730db47c.1920x1080.jpg?t=1668164698' }} />
      <Paragraph>Un software de edición de vídeo de tipo edición no lineal y editor de audio diseñado para PC. </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Premier')}>Ver mas..</Button>
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