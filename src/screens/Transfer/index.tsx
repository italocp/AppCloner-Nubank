import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {
  Container,
  TextContainer,
  TitleText,
  SubTitle,
  SubMoney,
  InputContainer,
  InputText,
  BorderLine,
} from './styles';

const Transfer = () => {
  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: '#000'}} />
      <StatusBar barStyle={'light-content'} />
      <Container>
        <TextContainer>
          <TitleText>Qual é o valor da transferência?</TitleText>
          <SubTitle>
            Saldo disponível em conta <SubMoney>R$ 2.433,45</SubMoney>
          </SubTitle>
        </TextContainer>
        <InputContainer>
          <InputText
            placeholder="R$ 0,00"
            placeholderTextColor={'#000'}
            keyboardType="number-pad"
          />
          <BorderLine />
        </InputContainer>
      </Container>
    </>
  );
};

export default Transfer;
