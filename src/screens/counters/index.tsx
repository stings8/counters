import React, {useEffect, useReducer, useState} from 'react';
import {Header} from '../../components/Header';
import {Shadow} from '../../components/Shadow';
import {Container, Content, ListItems, Item, Title, TextCount} from './styles';
import {useCounter} from '../../hooks/useCounter';

export function Counters() {
  const {counters, setSelected} = useCounter();
  const [countSelected, setCountSelected] = useState(0);
  useEffect(() => {
    if (counters.length !== 0 && !countSelected) {
      setSelected(counters[0].counterId);
      setCountSelected(counters[0].counterId);
    }
  }, [counters, setSelected, countSelected]);

  function handleSelected(countId: number) {
    const selected = counters.find(count => count.counterId === countId);
    if (selected) {
      setCountSelected(selected.counterId);
      setSelected(selected.counterId);
    }
  }

  return (
    <Container>
      <Header title="Counters" />
      <Content>
        <ListItems
          data={counters}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <Shadow>
              <Item
                selected={item.counterId === countSelected}
                onPress={() => handleSelected(item.counterId)}>
                <Title>{item.title}</Title>
                <TextCount>{item.counter}</TextCount>
              </Item>
            </Shadow>
          )}
        />
      </Content>
    </Container>
  );
}
