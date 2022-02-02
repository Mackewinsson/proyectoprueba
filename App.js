import React, {useEffect, useState} from 'react';
import {Image} from 'react-native';
import styled from 'styled-components/native';
import axios from 'axios';

const App: () => Node = () => {
  useEffect(() => {
    (async () => {
      const {data} = axios('www.google.com');
    })();
  }, []);

  const [image, setImage] = useState([]);
  return (
    <Container>
      <Text>Imagenes de flikr</Text>
      <Images>
        {image.map(el => (
          <Image source={{uri: el.url}} />
        ))}
      </Images>
    </Container>
  );
};

const Container = styled.SafeAreaView`
  background-color: lightgray;
  flex: 1;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Images = styled.ScrollView``;

export default App;
