import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title>Asana</Title>
   
        <Card.Cover source={{ uri: 'data:image/png;base64,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' }} />
      <Paragraph>software ideal para gestionar tareas y proyectos.</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://wpforms.com/wp-content/uploads/2021/12/asana-homepage.png' }} />
      <Paragraph>Para descargar Asana en Windows es necesario ir a la pagina oficial y descargar el instalado.
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://lh3.googleusercontent.com/pKljMpHQTD_vGBVnS8bYHluXNTaiKZQy19UzE0GVFlpgKz45GkUOaFGRfmjIK3HXNF6ONFI4hBjHQ8phZefc9W-SW0KRf2mHW0l5HU4PiIVBznXqtgTwUZLyDZoIR4wf0Mnt0t9u7Ws_lZg9HBK93FAAMdNsBNXzlytNwEzkrPrJsVLTMEMTqOMz8grZ7OzoDtqKI4Y3F8uPA-gtq2PNxQQ24Hn6RIH9RpzrYIMwgEcf5BDgfjUZReMkFXB1DMKz0M8-xJzdFwyAGNJRSMQUc7CUu_SChL39SLqu6a8bj8v6DNUSZUfZqjG0JrmAaup_KdVeTN3tNoBPSHr551kftxh2ND0597dXpc5_OghSpQ9gURBKAqjsnECIPd48L1-zb3QnCd6zZQriiH6WRNoQghuN3Cy_6VQHrnVzHpSflG-pj2gTRkVj7nI6NgmM6tKSG3vGSnPimhsSWmsN0ySrcI0yCsauY6xYKHcC1dbeX2b10I0wM8c-DEZd_eAnCoFK2h6dcxaL9rhmCdWAuxx0UG7YfBE4XldFen6EuJVglQ-0xhs0K2hNEJwrvVdr9wZyncPeRDFWqUGtMgzBLLd1w1SLeDlNsJ1eN7T_gJCeJoPOKPCkus9TWGOq3m_aPaAkBLBTzDEagp8JbUbuEmSmsEWk6OVFDR0RYB-iGqtepyCMLM2Bp5ufXjACcKen4wMX1_OmZDAggwoljtnQnbf7yYGO1Q3uLVFUSl9xol6u42a7thk1dOON82UJ_AnkAEH6txA0ndCUhciSotho_Dn7rP0RycOCbtS28cMwnTrdHdWaP9MwBnVyg1aDy8U6XTHDxZhN9wDQXKQFWOk8bIexSvul5xtN5kg-Ni4ixIwAudTHc1u5o4YDjUZMFn1Va2oh1bTmE3m5K34E_tfAAT59-7SPhf30HUGAJRTWwlrvnrQo7EcQcSHE9jrhaNOEYuhVLXnvMuhiOpobhS4f3gE=w247-h112-no?authuser=0' }} />
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
   
        <Card.Cover source={{ uri: 'https://lh3.googleusercontent.com/W0oo2ParmkkRob4N6MEMzaii0rV6YE2TD6Qtd75impLRc6WktIH_hev0umcTDl4lux5DktQ5fRk0mDFzU0pJVvKFzXn_ddBLmLD-rvBC3XYCS4IG_cfRKbsh8TSIGPOMg63IGHuLBDrNN3kobiR988sU1AkZsQMQp_8EmhjiNN9yiIhkkgJackvjzQPL8BQC0tP5729mdielU4wjADvzhCDBwYNfCWoLizK3_yZVnXkmMeaWCnJGizHSKvkPdjtaKYBuAuDlNoeql8jX9FoYF4GNbQZQ_PUoXOoV7WoZ4THNONE61iTSPsjv0BpKE-_g-EimbwGPg1_DRmkuiYk41H6zeYF2gUdfqpWe_hyyIJFwNlu1n2cZ-Hq_oN5VGUWbpCmz4bJ55VBlDTP8sxCBvdrew5dNODhuAIVt11S8rwgzzlWboZPoaHBtWsFbaBtAsWxPuy4f-AY06Zh68RA0nZ5l98IrPEZ4g6SeGs4hY8Qt3VX2VYIDvIIKm5par6dTPBkdMJegyrMWoklkuxa9Aq0PU-CuYjznmiiHbTHQM0ugDr5Fi9DHEKaucIVuiepfnmmv9GAsjd3vjJQ9btL1Pdzn4Wj-QnWVWznzur6gXKWoqnk0Hqz057lteaLDKACKURvled2CByDnKGwNsc7JZNpbaMMf54AFsB6bJ6P8hKNzF2KRuz9kzoR25NzjB2yGLRlbHn5Xja8KK4GnxMgDNFqkIf0-2nFLQQWf5cPfbNHVAaF-GmMK4Q5-HLPpxRVwQQVS6TkkCMy2WGPeK463pNjO0Th2pB-D4Qs2Rz5cO49VNwpbDIDMbQaq4Qi3lHUoJY783F6yDxc_gPbpVq7vRVr5w8fsI7uruDUFslCb4Zt49PXLboxE_HonVcQzXW1E_YzcCA2RGaOnTUeKwZNW_NJaGcWD31tF21RHfoOsQtVud7sRNPgfxwef7StbUPKlIumPgXW1n3GqBrPMz_c=w277-h185-no?authuser=0' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Asana. 
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
 

    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 4</Title>
   
        <Card.Cover source={{ uri: 'https://luna1.co/0d5edf.png' }} />
      <Paragraph>Al terminar la instalación saldrá 
esta ventana con la instalación completa
 de Asana en tu computadora.

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
  
  