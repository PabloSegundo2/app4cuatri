import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Microsoft office, es un conjunto de herramientas destinadas a la creación, edición, almacenamiento y transmisión de información desde computadoras personales. Permite optimizar y automatizar las actividades habituales de cualquier oficina (o en nuestro caso, un consultorio).</Title>
  
      <Card>
    <Card.Content>
    <Title>Office</Title>
   
        <Card.Cover source={{ uri: 'https://i0.wp.com/grupocarman.com/blog/wp-content/uploads/2015/10/ofimatica.jpg?fit=1280%2C720&ssl=1' }} />
      <Paragraph>Paqueteria de office </Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2022/10/Microsoft-365-App-1.jpg' }} />
      <Paragraph>Para iniciar el proceso de instalación, debe dirigirse a la página oficial de office:
www.office.com, una vez en ella pulse el botón de iniciar sesión. 
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://jcgonzalezmartin.files.wordpress.com/2019/03/image-13.png' }} />
      <Paragraph>Realizado el paso anterior se le solicitará ingresar usuario y contraseña, en este caso
usaremos una cuenta de egresado. 

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 3</Title>
   
        <Card.Cover source={{ uri: 'https://geeks.ms/cfs-file.ashx/__key/CommunityServer.Blogs.Components.WeblogFiles/jcgonzalez/image_5F00_1E6CFD25.png' }} />
      <Paragraph>Al ingresar se nos presenta la plataforma web de office, donde puede utilizar en línea las
herramientas disponibles. Para efectos de este tutorial descargaremos las herramientas de
office para usarlas de la manera convencional.  

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://www.muycomputer.com/wp-content/uploads/2022/03/Office-Online_3.jpg' }} />
      <Paragraph> Pulse el botón instalar office y seleccione la opción “Aplicaciones de office 365” para
descargar el instalador. 

 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>

    Pulse el botón instalar office y seleccione la opción “Aplicaciones de office 365” para
descargar el instalador. 


 



    


  

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
  
  