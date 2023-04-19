import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Dropbox es un servicio de alojamiento de archivos multiplataforma en la nube, operado por la compañía estadounidense Dropbox. El servicio permite a los usuarios almacenar y sincronizar archivos en línea y entre ordenadores y compartir archivos y carpetas con otros usuarios y con tabletas y móviles.​ </Title>
  
      <Card>
    <Card.Content>
    <Title>DropBox</Title>
   
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-q9xngutnr7un_zkxGXq6wltkGvhYauOJYu-GEnVDYw6zJox9Tek46HZD8zZQKvZeyjc&usqp=CAU' }} />
      <Paragraph>Paqueteria de oficce </Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://propelyourcompany.com/wp-content/uploads/dropbox-homepage.png' }} />
      <Paragraph>Para descargar Dropbox en Windows es necesario ir a la pagina oficial  
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://aem.dropbox.com/cms/content/dam/dropbox/blog/files/2019/06/new-dropbox-social-preview.png' }} />
      <Paragraph>al ingreasar a la parte de descargas se descargara automaticamente el intalador de DropBox

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 3</Title>
   
        <Card.Cover source={{ uri: 'https://cdn.windowsreport.com/wp-content/uploads/2020/04/dropbox-install.png' }} />
      <Paragraph> Al darle click se mostrara los pasos a seguir para intalar dropbox en tu equipo
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://4.bp.blogspot.com/-2Hr4NsYVbvY/XMHncBuotUI/AAAAAAAAH6Q/LTitUtPedYIYqo8Jaulpv_aKg_U05Ia0wCLcBGAs/s1600/GDSS%2BDropbox%2BCreate%2BStill.png' }} />
      <Paragraph> Lo siguiente es dar en intalar y aceptar lo que te pida el intalador
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>
    

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 5</Title>
   
        <Card.Cover source={{ uri: 'https://itservices.usc.edu/files/2017/10/dropboxinstall6-1.png' }} />
      <Paragraph>Esperas a que se instale de forma correctamente
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
      backgroundColor: '#6495ed',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    
  });
  
  