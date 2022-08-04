import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-top-width: 1px;
  border-color: #e6e6e6;

  padding: 24px;
`;

export const CardFunctionRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleCardText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
`;

export const SubText = styled.Text`
  color: #b1aaaa;
  font-weight: 500;
  margin-top: 8px;
`;

export const FaturaText = styled.Text`
  color: #820AD1;
  font-weight: 500;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 16px;
  background-color: #e6e6e6;

  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  border-radius: 8px;
  margin-top: 16px;

  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-left: 8px;
`;