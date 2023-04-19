import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Box, NativeBaseProvider, Avatar } from 'native-base';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('jamautvt.pvfequipo7.com/');
      const json = await response.json();
      setData(json.navegadores);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <NativeBaseProvider>
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Box>
              <Text style={{color: 'black'}}>Nombre: {item.nombre}</Text>
              <Text style={{color: 'black'}}>Porcentaje: {item.porcentaje}</Text>
              <Avatar size="60px" source={{uri: item.image}} />
            </Box>
          )}
        />
      )}
    </View>
    </NativeBaseProvider>
  );
};