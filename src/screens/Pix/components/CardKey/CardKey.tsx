import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import {
  Container,
  LineView,
  ContainerStyle,
  ContainerText,
  TextTitle,
  TextBody,
} from './styles';

export function CardKey() {
  return (
    <Container>
      <LineView style={{marginTop: 45}} />
      <ContainerStyle>
        <ContainerText>
          <TextTitle>Registrar ou trazer chaves</TextTitle>
          <TextBody>
            Registre uma nova chave ou faça uma portabilidade para o Nubank.
          </TextBody>
        </ContainerText>
        <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
      </ContainerStyle>
      <LineView />
      <ContainerStyle>
        <ContainerText>
          <TextTitle>Configurar Pix</TextTitle>
          <TextBody>
            Gerencie seu limite diário de transferência ou suas chaves Pix.
          </TextBody>
        </ContainerText>
        <Ionicons name="chevron-forward-outline" size={20} color="#908D91" />
      </ContainerStyle>
      <LineView />
    </Container>
  );
}
