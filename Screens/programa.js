import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>La programación es el proceso de crear un conjunto de instrucciones que le dicen a una computadora como realizar algún tipo de tarea.</Title>
  
      <Card>
    <Card.Content>
    <Title>Visual Studio Code</Title>
   
        <Card.Cover source={{ uri: 'https://i0.wp.com/www.irinadelgado.com/wp-content/uploads/2020/04/irina-delgado-5-Ventajas-de-usar-Visual-Studio-Code-como-tu-editor-de-texto.png?fit=800%2C400&ssl=1' }} />
      <Paragraph>Visual Studio Code es un editor de código </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Code')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
   
      <Title>Adobe XD</Title>
        <Card.Cover source={{ uri: 'https://miro.medium.com/max/1200/1*uvumPPoazseOGS6SLu9PLA.png' }} />
      <Paragraph> apoya al diseño vectorial y a los sitios web wireframe </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Adobe')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
    <Title>Android Studio </Title>
        <Card.Cover source={{ uri: 'https://appetiser.com.au/wp-content/uploads/2019/01/Android-Studio-3.3-1.png' }} />
      <Paragraph>Android Studio es el entorno de desarrollo integrado oficial para la plataforma Android </Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button title='asd' onPress={()=>navigation.navigate('Studio')}>Ver mas..</Button>
    </Card.Actions>

    <Card.Content>
    <Title>Netbeans</Title>
     <Card.Cover source={{ uri: 'https://www.jrebel.com/sites/default/files/image/2021-09/social-blog-netbeans-updates%20%281%29.jpg' }} />
   <Paragraph>-NetBeans es un entorno de desarrollo integrado libre, hecho principalmente para el lenguaje de programación Java.  </Paragraph>
 </Card.Content>
 <Card.Actions>
 <Button title='asd' onPress={()=>navigation.navigate('Java')}>Ver mas..</Button>
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
  
