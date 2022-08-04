import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import {
  Container,
  CardFunctionRow,
  TitleCardText,
  FaturaText,
  ValorText,
  Touchable,
  TextButton,
} from './styles';

import {privacyGlobal} from '../../hooks/State/usePrivacy';

export function CreditCard() {
  const [showBalence, setShowBalence] = privacyGlobal();

  return (
    <Container>
      <CardFunctionRow>
        <TitleCardText>Cartão de Crédito</TitleCardText>
        <Ionicons name="chevron-forward-outline" size={20} color="#c2bebe" />
      </CardFunctionRow>
      <FaturaText>Fatura atual</FaturaText>
      {showBalence ? (
        <ValorText>R$ 435,56</ValorText>
      ) : (
        <ValorText>R$ ****</ValorText>
      )}
      {showBalence ? (
        <FaturaText>Limite disponível de R$ 3.564,44</FaturaText>
      ) : (
        <FaturaText>Limite disponível de R$ ****</FaturaText>
      )}
      <Touchable>
        <TextButton>Parcelar Compras</TextButton>
      </Touchable>
    </Container>
  );
}
