
import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation } from 'react-native';




export default function App({navigation}){
  return(
    
    
      <ScrollView style={styles.scrollView}>

      <Card>
      
    <Card.Content>
   
      <Title>Ofimatica</Title>
        <Card.Cover source={{ uri: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OmXK?ver=5714&q=90&m=6&h=405&w=720&b=%23FFFFFFFF&l=f&o=t&aim=true' }} />
      <Paragraph>Programa basicos de ofimatica </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate(' Office')}>Ver mas..</Button>
    </Card.Actions>

     <Card.Content>
      <Title>Programacion</Title>
        <Card.Cover source={{ uri: 'https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg' }} />
      <Paragraph></Paragraph>
    </Card.Content>
     <Card.Actions>
     <Button title='asd' onPress={()=>navigation.navigate('Programa')}>Ver mas..</Button>
    </Card.Actions>
     <Card.Content>
      <Title>Edicion de Video</Title>
        <Card.Cover source={{ uri: 'https://static.hooksounds.com/uploads/2022/02/photo-1574717024653-61fd2cf4d44d-740x600.jpeg' }} />
      <Paragraph> </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Edicion')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
      <Title>Juegos</Title>
        <Card.Cover source={{ uri: 'https://media.ambito.com/p/6395e6065b0c2a75923afd40d72c577a/adjuntos/239/imagenes/039/902/0039902430/730x0/smart/videojuegosjpg.jpg' }} />
      <Paragraph>Juegos de computadora </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Video')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
      <Title>API</Title>
        <Card.Cover source={{ uri: 'https://i.blogs.es/ad7836/api/1366_2000.jpg' }} />
      <Paragraph>API UWU PRO</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Appi')}>Ver mas..</Button>
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


