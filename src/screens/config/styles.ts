import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import theme from '../../global/styles/theme';
export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  flex: 1;
  padding: ${ms(16)}px;

  justify-content: space-between;
`;

export const WrapperButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: ${ms(16)}px 0;
`;

export const Button = styled.TouchableOpacity`
  width: ${ms(140)}px;
  height: ${ms(70)}px;

  background-color: ${({theme}) => theme.colors.shape};
  border-radius: ${ms(8)}px;

  align-items: center;
  justify-content: center;
  padding: ${ms(8)}px;
`;

export const TextLabel = styled.Text`
  font-size: ${({theme}) => theme.fontSize.heading2}px;

  color: ${({theme}) => theme.colors.text1};
  font-weight: bold;
`;

export const TextButton = styled.Text`
  font-size: ${({theme}) => theme.fontSize.heading3}px;
  color: ${({theme}) => theme.colors.secondary};

  font-weight: 500;
  text-align: center;
`;

export const WrapperCounter = styled.View`
  width: 100%;
  height: ${ms(160)}px;

  margin: ${ms(16)}px 0;
  border-radius: ${ms(8)}px;
  padding: ${ms(20)}px ${ms(16)}px;

  background-color: ${({theme}) => theme.colors.shape};

  justify-content: space-between;
  align-items: center;
`;

export const TextCounter = styled.Text`
  font-size: ${({theme}) => theme.fontSize.heading2}px;
  color: ${({theme}) => theme.colors.text1};
  font-weight: 500;
`;

export const BorderCounter = styled.View`
  width: ${ms(220)}px;
  border: ${ms(1)}px solid ${({theme}) => theme.colors.secondary};
  border-radius: ${ms(8)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CounterButton = styled.TouchableOpacity`
  padding: ${ms(8)}px;
  align-items: center;
  justify-content: center;
`;

export const PlusButton = styled(Feather).attrs({
  name: 'plus',
  size: ms(35),
  color: theme.colors.secondary,
})``;

export const MinusButton = styled(Feather).attrs({
  name: 'minus',
  size: ms(35),
  color: theme.colors.secondary,
})``;

export const TextCounterButton = styled.Text`
  font-size: ${({theme}) => theme.fontSize.heading3}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: 400;

  margin: 0 ${ms(15)}px;
`;

export const Separator = styled.View`
  height: 100%;
  width: ${ms(1)}px;

  background-color: ${({theme}) => theme.colors.text};
`;
