import React from 'react';
import {Ionicons} from '@expo/vector-icons';

import {
  Container,
  TextTitle,
  IconsView,
  OptionView,
  OptionIcon,
  OptionText,
} from './styles';

export function Middle() {
  return (
    <Container>
      <TextTitle>Enviar</TextTitle>
      <IconsView>
        <OptionView>
          <OptionIcon>
            <Ionicons name="cash-outline" size={25} color="#000" />
          </OptionIcon>

          <OptionText>Transferir</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name="cash-outline" size={25} color="#000" />
          </OptionIcon>

          <OptionText>Pix Copia e Cola</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name="cash-outline" size={25} color="#000" />
          </OptionIcon>

          <OptionText>Ler QR code</OptionText>
        </OptionView>
      </IconsView>

      <TextTitle>Receber</TextTitle>
      <IconsView>
        <OptionView>
          <OptionIcon>
            <Ionicons name="cash-outline" size={25} color="#000" />
          </OptionIcon>

          <OptionText>Cobrar</OptionText>
        </OptionView>

        <OptionView>
          <OptionIcon>
            <Ionicons name="cash-outline" size={25} color="#000" />
          </OptionIcon>

          <OptionText>Depositar</OptionText>
        </OptionView>
      </IconsView>
    </Container>
  );
}
