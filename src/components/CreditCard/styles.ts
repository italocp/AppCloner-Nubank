import styled from 'styled-components/native';

export const Container = styled.View`
background-color: #fff;
  border-top-width: 1px;
  border-color: #e6e6e6;

  margin-top: 24px;

  padding: 24px;
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
`;

export const FaturaText = styled.Text`
  color: #b1aaaa;
  font-weight: 500;
  margin-top: 8px;
`;

export const ValorText = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-top: 8px;
`;

export const Touchable = styled.TouchableOpacity`
  padding: 8px;
  background-color: #e6e6e6;

  width: 135px;
  border-radius: 16px;
  margin-top: 16px;

  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;