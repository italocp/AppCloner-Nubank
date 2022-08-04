import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {CardKey} from './components/CardKey/CardKey';
import {Middle} from './components/Middle/middle';

import {Title} from './components/Title/Title';
import {Container} from './styles';

const Pix = () => {
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#000', flex: 0}}></SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <Container>
        <Title />
        <Middle />
        <CardKey />
      </Container>
    </>
  );
};
export default Pix;
