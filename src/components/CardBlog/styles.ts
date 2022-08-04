import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-top-width: 1px;
  border-color: #e6e6e6;

`;

export const CardFunctionRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleCardText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  margin-top: 16px;
  padding: 0 24px;
`;
export const Touchable = styled.TouchableOpacity`
  padding: 16px;
  background-color: #e6e6e6;

  width: 250px;
  border-radius: 16px;
  margin-top: 16px;
  margin-right: 16px;
  align-items: center;
`;

export const ValorText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: #000;
  margin-top: 8px;
`;


export const TextButton = styled.Text`
  color: #820AD1;
  font-size: 14px;
  font-weight: 500;
`;