import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title>NetBeans</Title>
   
        <Card.Cover source={{ uri: 'https://www.jrebel.com/sites/default/files/image/2021-09/social-blog-netbeans-updates%20%281%29.jpg' }} />
      <Paragraph>entorno de desarrollo integrado libre</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://www.aulafacil.com/uploads/cursos/954/editor/java-lecc-2_descargarjava.es.png' }} />
      <Paragraph>-Primero que todo nos dirigimos a la web de descarga de Java.
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://www.aulafacil.com/uploads/cursos/954/editor/java-lecc-2_instalarjava3.es.png' }} />
      <Paragraph>Ejecutar el archivo. 
  Una vez descargado el paquete, puedes 
   ejecutar el archivo.


 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 3</Title>
   
        <Card.Cover source={{ uri: 'https://www.aprenderpython.net/wp-content/uploads/2018/03/4-1-1024x505.png' }} />
      <Paragraph> Nos dirigimos al enlace de la web oficial de NetBeans.
                </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://www.aprenderpython.net/wp-content/uploads/2018/03/4-1-1024x505.png' }} />
      <Paragraph> Damos clic en “Download” justo en la primera columna de izquierda a derecha.

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 5</Title>
   
        <Card.Cover source={{ uri: 'https://www.aprenderpython.net/wp-content/uploads/2018/03/6.png' }} />
      <Paragraph> Una vez se termine de descargar le damos clic al archivo. En caso de que nos pida permisos de administrador para iniciar la instalación clicamos en “Si”..

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 6</Title>
   
        <Card.Cover source={{ uri: 'https://sisqo21.files.wordpress.com/2013/10/sin-tc3adtulo3.jpg' }} />
      <Paragraph>  Clic en “Next” nuevamente, esperamos a que cargue y finalmente clicamos en “finish”.

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
  
  