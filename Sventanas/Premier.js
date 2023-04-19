import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
     <Title>Adobe Premiere Pro es un software de edición de video desarrollado por Adobe y publicado como parte de Adobe Creative Cloud. Está orientado a la edición de vídeos profesionales, mientras que su derivado, Adobe Premiere Elements, apunta al mercado de consumidores.​ </Title>
  
      <Card>
    <Card.Content>
    <Title>Adobe Premiere </Title>
   
        <Card.Cover source={{ uri: 'https://cicdtrail.com/wp-content/uploads/2022/02/what-is-adobe-premiere-pro.jpg' }} />
      <Paragraph>Crea Videos de manera facil</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://ptgmedia.pearsoncmg.com/imprint_downloads/peachpit/peachpit/IMAGES/Figure01-03_tour.jpg' }} />
      <Paragraph>Para descargar adobe premiere en Windows es necesario ir a la pagina oficial el prgrama es de paga pero esta la version  de prueba
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://helpx.adobe.com/content/dam/help/es/photoshop-elements/kb/troubleshoot-installation-photoshop-elements-premiere/jcr%3Acontent/main-pars/procedure/proc_par/step_4/step_par/image_0/Delete.png.img.png' }} />
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
   
        <Card.Cover source={{ uri: 'https://helpx.adobe.com/content/dam/help/es/download-install/using/download-install-premiere-elements/2022/installation-options-pre.png.img.png' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Adobe Premiere
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
   
        <Card.Cover source={{ uri: 'https://helpx.adobe.com/content/dam/help/en/premiere-pro/using/whats-new/2019/jcr_content/main-pars/image_642281707/premiere_pro_homescreen.png.img.png' }} />
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
  
  