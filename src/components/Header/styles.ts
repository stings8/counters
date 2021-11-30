import styled from 'styled-components/native';
import {ms} from 'react-native-size-matters';

export const Container = styled.View`
  width: 100%;
  height: 200px;
  background-color: ${({theme}) => theme.colors.secondary};

  padding: ${ms(16)}px ${ms(20)}px;

  align-items: flex-start;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.shape};
  font-size: ${({theme}) => theme.fontSize.heading1}px;
  font-weight: bold;
`;
