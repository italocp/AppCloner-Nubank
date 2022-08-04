import styled from 'styled-components/native';
import { Dimensions } from "react-native"

const { width } = Dimensions.get('window')

export const Container = styled.View`
  padding: 24px;
`;

export const TextTitle = styled.Text`
  font-size: 32px;
  font-weight: 500;
  color: #000;
`;

export const IconsView = styled.View`
  flex-direction: row;
  margin-top: 16px;
  margin-left: 32px;
`;

export const OptionView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  margin-bottom: 16px;
  margin-right: 24px;
`;

export const OptionIcon = styled.View`
  height: ${width * 0.18}px;
  width: ${width * 0.18}px;

  border-radius: 99px;
  align-items: center;
  justify-content: center;

  background-color: #e6e6e6;
`;

export const OptionText = styled.Text`
  margin-top: 8px;
  font-weight: 500;
`;
