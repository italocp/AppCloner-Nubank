import React from 'react';
import {Feather, Entypo} from '@expo/vector-icons';

import {
  Container,
  CardFunctionRow,
  TitleCardText,
  FaturaText,
  Touchable,
  TextButton,
  SubText,
} from './styles';

export function CardServices() {
  return (
    <Container>
      <TitleCardText>Seguros</TitleCardText>
      <SubText>Proteção para você cuidar do que importa</SubText>
      <Touchable>
        <CardFunctionRow>
          <Entypo name="heart-outlined" size={20} color="#000" />
          <TextButton>Seguro de vida</TextButton>
        </CardFunctionRow>
        <FaturaText>Conhecer</FaturaText>
      </Touchable>
      <Touchable>
        <CardFunctionRow>
          <Feather name="smartphone" size={20} color="#000" />
          <TextButton>Seguro celular</TextButton>
        </CardFunctionRow>
        <FaturaText>Conhecer</FaturaText>
      </Touchable>
    </Container>
  );
}
