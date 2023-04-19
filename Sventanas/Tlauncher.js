import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title></Title>
   
        <Card.Cover source={{ uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c104009d-9f0a-4df2-80ec-31a6d78c1458/depomf8-6f599aa3-036c-4b4a-bd3c-1d2dc5be9b37.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MxMDQwMDlkLTlmMGEtNGRmMi04MGVjLTMxYTZkNzhjMTQ1OFwvZGVwb21mOC02ZjU5OWFhMy0wMzZjLTRiNGEtYmQzYy0xZDJkYzViZTliMzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.0Qto-LvhHU-ifdLhcjTMWDVnZtodUm3V4ppVZoEm-cY' }} />
      <Paragraph>Juego </Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la instalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://comocrearcuenta.net/wp-content/uploads/2021/07/tlaunch.jpg' }} />
      <Paragraph>Para descargar Tlancher en Windows es necesario ir a la pagina oficial  
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://ugetfix.com/wp-content/uploads/articles/askit/minecraft1-17-a-jni-error-has-occurred-please-check-your-installation-and-try-again-fix-download-java-16-proceed_en.jpg' }} />
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
   
        <Card.Cover source={{ uri: 'https://tlauncher.org/img/tlauncher-login-tl-v2.0-en.png' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Tlauncher. 
               
                </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://tecnokun.org/wp-content/uploads/2022/01/Tlauncher-como-baixar-e-usar.jpg' }} />
      <Paragraph>Al terminar la instalación saldrá 
esta ventana con la instalación completa
 de Tlauncher en tu computadora.

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
  
  