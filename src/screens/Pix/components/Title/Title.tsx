import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

import {Ionicons} from '@expo/vector-icons';

import {propsStack} from '../../../../routes/Stack/Models';
import {
  Container,
  Touch,
  IconView,
  TextView,
  TextTitle,
  TextSubtitle,
} from './styles';

export function Title() {
  const navigation = useNavigation<propsStack>();

  return (
    <Container>
      <IconView>
        <Touch onPress={() => navigation.navigate('Home')}>
          <Ionicons name="close" size={30} color="#C2bebe" />
        </Touch>
        <Ionicons name="help-circle-outline" size={25} color="#C2bebe" />
      </IconView>
      <TextView>
        <TextTitle>Área Pix</TextTitle>
        <TextSubtitle>
          Envie e receba pagamentos a qualquer hora e dia da semana, sem pagar
          nada por isso.
        </TextSubtitle>
      </TextView>

      {/* <TouchableOpacity
        style={{marginTop: 12, padding: 8, backgroundColor: '#BDBDBD'}}
        onPress={() => navigation.goBack()}>
        <Text>Voltar</Text>
      </TouchableOpacity> */}
    </Container>
  );
}
