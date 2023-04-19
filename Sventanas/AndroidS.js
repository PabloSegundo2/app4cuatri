import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title>Visual Code</Title>
   
        <Card.Cover source={{ uri: 'https://appetiser.com.au/wp-content/uploads/2019/01/Android-Studio-3.3-1.png' }} />
      <Paragraph>Herramienta para creacion de apps</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/how-to-download-and-install-android-studio-in-windows-10/Images/step1.PNG' }} />
      <Paragraph>-Para descargar Android Studio, visite el sitio web oficial de Android Studio en su navegador web.
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/how-to-download-and-install-android-studio-in-windows-10/Images/step2.PNG' }} />
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
   
        <Card.Cover source={{ uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/how-to-download-and-install-android-studio-in-windows-10/Images/step3.PNG' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Android Studio. 
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
   
        <Card.Cover source={{ uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/how-to-download-and-install-android-studio-in-windows-10/Images/step5.PNG' }} />
      <Paragraph> Selección de carpeta donde se instalará.
En este paso puede 
elegir donde se instalará Android Studio,
 por defecto el software creará
una carpeta con el nombre Visual Studio 
Code en C:\. (recomendable que deje la 
carpeta por defecto)
 para seguir con la instalación
 hacer clic en “Siguiente”.

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 5</Title>
   
        <Card.Cover source={{ uri: 'https://csharpcorner-mindcrackerinc.netdna-ssl.com/article/how-to-download-and-install-android-studio-in-windows-10/Images/step7.PNG' }} />
      <Paragraph>Al terminar la instalación saldrá 
esta ventana con la instalación completa
 de Android Studio en tu computadora.

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
  
  