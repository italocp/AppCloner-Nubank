import React from 'react';
import {
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Ionicons, FontAwesome5, Feather} from '@expo/vector-icons';

import {
  Container,
  TotalBalance,
  AccountView,
  Subtitle,
  BalanceTotal,
  OptionView,
  OptionIcon,
  OptionText,
  CardsView,
  Background,
} from './styles';

import {Header} from '../../components/Header/Header';
import {propsStack} from '../../routes/Stack/Models';
import {privacyGlobal} from '../../hooks/State/usePrivacy';
import {MyCard} from '../../components/card/MyCard';
import {CreditCard} from '../../components/CreditCard/CreditCard';
import {CardBlog} from '../../components/CardBlog/CardBlog';
import {CardServices} from '../../components/CardServices/CardServices';

const Home = () => {
  const navigation = useNavigation<propsStack>();
  const [showBalence] = privacyGlobal();
  return (
    <>
      <SafeAreaView
        style={{backgroundColor: '#820AD1', flex: 0}}></SafeAreaView>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <StatusBar barStyle={'dark-content'} backgroundColor="#820AD1" />
          <Header />
          <Background>
            <TotalBalance>
              <AccountView>
                <Subtitle>Conta</Subtitle>

                <Ionicons
                  name="chevron-forward-outline"
                  size={20}
                  color="#908D91"
                />
              </AccountView>

              {showBalence ? (
                <BalanceTotal>R$ 1365,98</BalanceTotal>
              ) : (
                <BalanceTotal>R$ ****</BalanceTotal>
              )}
            </TotalBalance>
            <View style={{backgroundColor: '#fff'}}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginLeft: 24, paddingRight: 50}}>
                <OptionView onPress={() => navigation.navigate('Pix')}>
                  <OptionIcon>
                    <Ionicons name="cash-outline" size={25} color="#000" />
                  </OptionIcon>

                  <OptionText>Área Pix</OptionText>
                </OptionView>

                <OptionView>
                  <OptionIcon>
                    <FontAwesome5 name="barcode" size={25} color="#000" />
                  </OptionIcon>

                  <OptionText>Pagar</OptionText>
                </OptionView>
                <OptionView>
                  <OptionIcon>
                    <Ionicons name="cash-outline" size={25} color="#000" />
                  </OptionIcon>

                  <OptionText>Pix</OptionText>
                </OptionView>
                <OptionView>
                  <OptionIcon>
                    <Ionicons name="cash-outline" size={25} color="#000" />
                  </OptionIcon>

                  <OptionText>Pix</OptionText>
                </OptionView>
                <OptionView>
                  <OptionIcon>
                    <Feather name="smartphone" size={25} color="#000" />
                  </OptionIcon>

                  <OptionText>Recarga de</OptionText>
                  <OptionText>celular</OptionText>
                </OptionView>
              </ScrollView>
            </View>
            <CardsView>
              <MyCard />
            </CardsView>
            <CreditCard />
            <CardServices />
            <CardBlog />
            {/* <TouchableOpacity
        style={{marginTop: 12, padding: 8, backgroundColor: '#BDBDBD'}}
        onPress={() => navigation.navigate('Profile')}>
        <Text>Profile</Text>
      </TouchableOpacity> */}
          </Background>
        </ScrollView>
      </Container>
    </>
  );
};

export default Home;
