import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title>Visual Code</Title>
   
        <Card.Cover source={{ uri: 'data:image/png;base64,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' }} />
      <Paragraph>Editor de texto</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://www.cursosgis.com/wp-content/uploads/4-115-800x429.jpg' }} />
      <Paragraph>Para descargar Visual Code en Windows es necesario ir a la pagina oficial  
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://www.mclibre.org/consultar/informatica/img/vscode/vsc-descargar-2.png' }} />
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
   
        <Card.Cover source={{ uri: 'https://support.academicsoftware.eu/hc/article_attachments/360007150317/mceclip1.png' }} />
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
   
        <Card.Cover source={{ uri: 'https://support.academicsoftware.eu/hc/article_attachments/360007150337/mceclip2.png' }} />
      <Paragraph> Selección de carpeta donde se instalará.
EN este paso puede 
elegir donde se instalará Visual Studio Code,
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
   
        <Card.Cover source={{ uri: 'https://support.academicsoftware.eu/hc/article_attachments/360007150517/mceclip6.png' }} />
      <Paragraph>Al terminar la instalación saldrá 
esta ventana con la instalación completa
 de Visual Studio 
Code en tu computadora.

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
  
  