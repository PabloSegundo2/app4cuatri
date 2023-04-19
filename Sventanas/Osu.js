import { Card, Title, Paragraph,Button} from 'react-native-paper';

import React from 'react';
import { StyleSheet, Text, ScrollView, StatusBar,Searchbar,Heading,Tab,NavigationContainer,navigation,Image } from 'react-native';




export default function App({navigation}){
  return(

    
      <ScrollView style={styles.scrollView}>
          
  
      <Card>
    <Card.Content>
    <Title>Osu</Title>
   
        <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Osu%21_Logo_2016.svg/1200px-Osu%21_Logo_2016.svg.png' }} />
      <Paragraph>Juego de ritmo</Paragraph>
    </Card.Content>
    <Card.Actions>
   
    </Card.Actions>
    <Title>Pasos a seguir para la intalacion</Title>
    <Card.Content>
    <Title>Paso 1</Title>
        <Card.Cover source={{ uri: 'https://lh3.googleusercontent.com/qx4matsxRAMXV4URUXhMqo5ISA855f4USn3DhmOjd1nyGT2PHtxl58peMLdU-Pa7uGaunkb4R5ahj46igyEluA-44ityhJMeu0Wtu6ErjbT6GAOTQk3_xWgFbf4LkewW4tkXBE7Uu3T59dGzzHQAXsAQd6Y3TClvw5I5QY-WZzK6YMwzmUAjAP_DmW3ZVNPU2Em7iM5LiJwL8Ec6KGVZHBnEyzO1a7xQup-YmCASy9knLZ846KRjZ2udykPwI6I7PR5zo6X5FT-Kh6h8lePCdhwBvHUCuirpZp4DkbOndKK2S5pObqJM9ndJ44NclB9OJbwKWOacQlBhlnxRYFKJUuypqLVFjHtpvnG5mwYV3xsak3yl15icqwpkFOG2tFab7d2w_fNoLv-bXhnckc7_k1moZf7EPgkaXVC6d4x8Lzfey7s5FhVKHBM-TtpKbDOok6DyL_-0t5GhjsyNZ_0cDFIBoDu3F9n03nj5muE8uWoETDcyyX8C9UFmh-1A9O9SHmsdW-T3gOZazeL8xBDCFeCpl1Uan7efJlCV_MEQo-VZaQB_BKRzOQHZMU7a2ULrPZ6f7pkLZPjcs4IYzBv7ZJ7FJi5NK-UstQuIHLCQqcdf_C8GLUQnEH0D848wzmGs0bVKWKnq-Eimgd47CdfysOn1fo0YbY-Yzw0dvmz2kkRr6CMiAnISesr7nvbRluYhW-Hcn37Hc8FRerkxeZw8XQXmbDl1pkhBRIgPhb7VsM2gsW--7qcsyHDFCXKeH5-jT3A2q-xCSm8he04VLctBRwBsO-ZdjJacjViFoJKMASOWqV6KIqrsea8fOtfyrKgQMk8pScKqzcYjvU5VrdqX6-Eyl0JpH31pi8d3FcZxNnmZxjGtaWdGDbxPmhp0Zis6wNvkBnsqUT6hKrAZ2NIKm9E1KB1QvHjrxKsS2NOK2kl3R_VWMGDNmEHG6V7nJxo9pmIUNEQa27hlIRNuK6w=w366-h205-no?authuser=0' }} />
      <Paragraph>Para descargar Osu en Windows es necesario ir a la pagina oficial  
 </Paragraph>
    </Card.Content>
    <Card.Actions>
    </Card.Actions>


    <Title>
    </Title>
    <Card.Content>
    <Title>Paso 2</Title>
   
        <Card.Cover source={{ uri: 'https://lh3.googleusercontent.com/mrkLvMfTb8arn2GY3orFLJIMICE3QAjEg0VJbVlufzC_9mcOx13FOls0eIrRZuFCqGHf74AbyyP2OQ2WidPa7BRhqr4jG6xcMDvnJHqSNZQxvE_O7g8sLrGTPnOBtpI1Dawx8LrL2z9BZzFNxF7r2J3kPSmKrewX8e32TpIouhpFecxzllCNR4SpN-2Tk7lEW6Nedo-5nmAEEl6v0btKte8rDgTNYFVo-fqO6pnu9XTp0PacaOrbk9V1SC3uEb-fwdHFZ1YzHuDCHYQQdCjHrCfwSZlSQNMiqspS-3o2hYgUgFg7urRXJGoB2MkbMi73qToxmEJuBb9PGjzvn2v1GtGPuZb23zyxDjnejCHYzCbpbfheCupkqgU8uPhLFRnQZsCn7J5KyR9lEoBVes5Qwhe1iSOxRJPa-iNFDWv2bZbfmJ5OJO85_pY11KWAxSNttjF7xQOi61i9FihxS7RLdpdqxriYzwPz-wijqv6NW_0eCeRi1yz7s6wtZc57_nHgJMj9MEQhwMgSSKll0ax9k0hRHq2C6TYDQytD148UwtIejekDsNMmArHkl-DOb0Tt4W7g37eFHqwB82Y8Na4Mvu3xzbqrp6SySEmmilw4xai9h51TT9yD98CLj1avBdhnlAz9NsAjFXUHyOU-eNreMJHrVwR-69xMGRge_bDqCfzAVlG6g1LAPKnylKz3tcJCmyZ-amlIgexs91HoigXqkT2kS5KjUFQ1dRfz2YE3q_c2Zd72ARycaAkiKYHSY00cWaoiukvQDx1h6T8g-7nsmrveo2IBiJLJh7ipWj0FTywNgecwAR0FNT_NMJ7IDzFYU7m8HXNuZfZUXr2Q-mtuiXDvaN0IrOTKkLJgT4_V834SgDhmDUR4FOaJpaGKb1x3ZoEog3Ci8bDfrnaySDsI8H1P0sF3B2VA4qWBKeGwnEC_cfsRjo6WUIm9gkQh1maGHktNQEQxpojPzZsS3ZE=w198-h52-no?authuser=0' }} />
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
   
        <Card.Cover source={{ uri: 'https://beam.eyeware.tech/wp-content/uploads/2022/02/Beatmaps-osu.jpg' }} />
      <Paragraph> Una vez superados estos pasos, 
            aparece la pantalla de inicio del asistente para
           instalar Osu. 
               
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
   
        <Card.Cover source={{ uri: 'https://i.insider.com/5d5f048e2e22af0b34632484?width=700' }} />
      <Paragraph>Al terminar la instalación saldrá 
esta ventana con la instalación completa
 de osu
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
  
  