import styled from 'styled-components/native';
import { Dimensions } from "react-native"

const { width } = Dimensions.get('window')

export const Container = styled.View`
  flex:1;
  background-color: #820AD1;
`;
export const TotalBalance = styled.View`
  background-color: #fff ;
  padding: 24px;
`;
export const AccountView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 600;

  margin-bottom: 8px;
`;

export const BalanceTotal = styled.Text`
font-size: 20px;
font-weight: 700;

margin-top: 8px;
`;

export const OptionView = styled.TouchableOpacity`
  align-items: center;
  margin-right: 11px;
 
`;
export const OptionIcon = styled.View`
  height: ${width * 0.18}px;
  width: ${width * 0.18}px;

  background-color: #e6e6e6;

  border-radius: 99px;

  align-items: center;
  justify-content: center;
`;

export const OptionText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
`;

export const CardsView = styled.View`
  background-color: #fff;
  padding: 0 24px;
  margin-top: 24px;
`;


export const Background = styled.View`
  background-color: #fff;
  padding-bottom: 200px;
`