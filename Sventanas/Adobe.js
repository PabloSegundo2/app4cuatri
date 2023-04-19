import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Adobe Xd es una aplicación móvil. El software está disponible para MacOS y Windows. Adobe XD apoya al diseño vectorial y a los sitios web wireframe, creando prototipos simples e interactivos con un solo clic.​ </Title>
  
      <Card>
    <Card.Content>
    <Title>Adobe xd</Title>
   
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZ0-tz6YgGGLtm_EHclqFAuqFhpEJYN534ZKq25M_Cjgz7CNwFW1ht9rHo1KmAQsUgeI&usqp=CAU' }} />
      <Paragraph>Crea app de manera facil</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://fantastech.co/wp-content/uploads/2020/11/tutorial-7-1024x496.png' }} />
      <Paragraph>Para descargar adobe xd Code en Windows es necesario ir a la pagina oficial el prgrama es de paga pero hay instaladores gratuitoss
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://2.bp.blogspot.com/-589nuvKORSM/XV-PyAnE3lI/AAAAAAAAGeo/mOg6IaB1uqQJ6jv7OWrtNyV6_ba4yYf4wCK4BGAYYCw/s1600/eyecatch_180427_01.jpg' }} />
      <Paragraph>Ejecutar el archivo. 
  Una vez descargado el paquete, puedes 
   ejecutar el archivo .exe haciendo doble clic en 
    él. Para abrir el asistente de instalación


 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 3</Title>
   
        <Card.Cover source={{ uri: 'https://community.adobe.com/t5/image/serverpage/image-id/8540iF5C362F6B9FF5A7C/image-size/large/is-moderation-mode/true?v=v2&px=999' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Visual Studio Code. 
               Te pedirá que aceptes los términos
           de licencias Para ajustar las 
          configuraciones de la instalación 
                hacer clic en Siguiente
                </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://marshuang.files.wordpress.com/2017/12/xd18.png' }} />
      <Paragraph> se instala todo correctamanete 

 </Paragraph>
    </Card.Content>
    <Card.Actions>
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
  
  