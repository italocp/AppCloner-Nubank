import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import {Container, TextCard} from './styles';

export function MyCard() {
  return (
    <Container>
      <Ionicons name="card-outline" size={20} color="#000" />
      <TextCard>Meus cartões</TextCard>
    </Container>
  );
}
