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
        <Card.Cover source={{ uri: 'https://lh3.googleusercontent.com/hXqso54xjJjpefvgbJRMNB3ZiniagjaJKLuf38ZHzFiGFWnVdkszkoEx6lqdnkqLnStmHf8YC9hw0u-0ryeGwYgy-5qGZ9O1EQ9Dst6YwhiWjtoRlTQURlPYxd3LZQOEQD2IrGVtyeM7N3theq5Px1xMJTLyc5eo70Ly4jwsMbrjOaLi6k3NWRYFJnisnLsaKPXZ9KUoiFYTng_m3LirTSCaofyye0djkyyBY4p_SZhS_GWp9dBoOUCme51bb94af_eYzKYEJlo175JmWkW_VL_qCm7lOC_C920dacjzDQM1uUPsblR4UV-nmkvLhVGCFa_ulOc5RAycXf5Q7nSmeQb0cLwwIdYcdRWz8mHalXO7St2QN8R1DOjQGuZe-Eg3N-yO1JL0pKvpPi-VKH2x3n6VLeYag4GnSyNDkY5Q2_OLA25spIqTE4o7QpPOUfeBz29WYRh03_NAuSn7qwCod1eRskhbZYoJ8k27t7iu7kSswxTZToo6nO3Pf4YV_gJdNe_MRc-eCu0VIUKHiT0fdFXu2FTTuy0bzrTV0vl3jrCGBTWfAHgRa0f8YgbNrzVDSQuAQHh1HjzXQSoxlhAM11INrz1Q9SQ8dKfm5b6pBC1YgrXb8FM8rLngrSJk4z3ng0m5Fnb1I08fX8gt8Xg13LohVLY9C5puiZCTO3dp8Wv7-KLAWp5SZiYC5HVWopLDe-bHV_V3Tj2KpgvJSbCGAFXvLGl7PHpRFXrTD5e7NO9JS1pp-PJaLtr2Pql_69tYfisMhEKiz4RtVt7KGnTClXlY3lgyspiSDrSkeQHm8CZl_AHfUh3ixHwy3kU63znSwuhXbA29jPgHs0As_60zMhmSK_8VFCGqFQnD-0wH4xaGKEu7VoqRR6MONhlw0P6BEW3Z9BYNCC5lM1OtnEMqZVqdhiZz5QuRdjW7LWBJmA09oUBio7EY4Eawmttey1Cab9O1yh5DzQVd1ZuqiAE=w351-h199-no?authuser=0' }} />
      <Paragraph>Para descargar adobe premiere en Windows es necesario ir a la pagina oficial el prgrama es de paga pero esta la version  de prueba
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://helpx.adobe.com/content/dam/help/es/download-install/using/download-install-premiere-elements/2022/installation-options-pre.png.img.png' }} />
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
      backgroundColor: 'pink',
      marginHorizontal: 20,
    },
    text: {
      fontSize: 42,
    },
    
  });
  
  