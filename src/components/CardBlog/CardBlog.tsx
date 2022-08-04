import React from 'react';
import {Linking, ScrollView} from 'react-native';

import {
  Container,
  CardFunctionRow,
  TitleCardText,
  ValorText,
  Touchable,
  TextButton,
} from './styles';

export function CardBlog() {
  return (
    <Container>
      <TitleCardText>Descubra mais</TitleCardText>
      <CardFunctionRow>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal: 24}}
          showsHorizontalScrollIndicator={false}>
          <Touchable
            onPress={() => Linking.openURL('https://blog.nubank.com.br/')}>
            <ValorText>
              Conheça o Nubank vida: seguro e simples
              <TextButton> cabe no seu bolso</TextButton>
            </ValorText>
          </Touchable>
          <Touchable
            onPress={() => Linking.openURL('https://blog.nubank.com.br/')}>
            <ValorText>
              Conheça o Nubank vida: seguro e simples
              <TextButton> cabe no seu bolso</TextButton>
            </ValorText>
          </Touchable>
          <Touchable
            onPress={() => Linking.openURL('https://blog.nubank.com.br/')}>
            <ValorText>
              Conheça o Nubank vida: seguro e simples
              <TextButton> cabe no seu bolso</TextButton>
            </ValorText>
          </Touchable>
        </ScrollView>
      </CardFunctionRow>
    </Container>
  );
}
