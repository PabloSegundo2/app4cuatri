import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Consiste en un conjunto de técnicas informáticas (programas y aplicaciones) cuyo objetivo fundamental, es la automatización de las labores de oficina a través del empleo de avanzadas tecnologías.</Title>
  
      <Card>
    <Card.Content>
    <Title>Office</Title>
   
        <Card.Cover source={{ uri: 'https://i0.wp.com/grupocarman.com/blog/wp-content/uploads/2015/10/ofimatica.jpg?fit=1280%2C720&ssl=1' }} />
      <Paragraph>Paqueteria de office </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Officce')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
   
      <Title>Dropbox</Title>
        <Card.Cover source={{ uri: 'https://i.blogs.es/a7d040/dropbox/1366_521.jpg' }} />
      <Paragraph>permite alojar toda tu información de multimedia en la nube. </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Dropp')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
    <Title>Asana </Title>
        <Card.Cover source={{ uri: 'data:image/png;base64,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' }} />
      <Paragraph>software ideal para gestionar tareas y proyectos.</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Asana')}>Ver mas..</Button>
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
  
  