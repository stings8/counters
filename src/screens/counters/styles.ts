import {FlatList} from 'react-native';
import {ms} from 'react-native-size-matters';
import styled from 'styled-components/native';
import {ItemProps} from '../../hooks/useCounter';

type SelectItemProps = {
  selected: boolean;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  padding: ${ms(16)}px;
`;

export const Item = styled.TouchableOpacity<SelectItemProps>`
  width: 100%;
  height: ${ms(120)}px;

  background-color: ${({selected}) =>
    selected ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.4)'};

  padding: ${ms(20)}px ${ms(16)}px;
  margin-bottom: ${ms(8)}px;

  border-radius: ${ms(8)}px;

  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${({theme}) => theme.fontSize.heading2}px;
  color: ${({theme}) => theme.colors.text};
  font-weight: bold;

  text-align: left;
`;

export const TextCount = styled.Text`
  font-size: ${({theme}) => theme.fontSize.textCount}px;
  color: ${({theme}) => theme.colors.text1};
  font-weight: bold;

  text-align: right;
`;

export const ListItems = styled(
  FlatList as new () => FlatList<ItemProps>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;
