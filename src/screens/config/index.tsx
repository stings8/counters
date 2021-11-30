import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Header} from '../../components/Header';
import {Shadow} from '../../components/Shadow';
import {
  Container,
  Content,
  Button,
  WrapperButton,
  TextButton,
  TextLabel,
  WrapperCounter,
  TextCounter,
  BorderCounter,
  PlusButton,
  CounterButton,
  MinusButton,
  TextCounterButton,
  Separator,
} from './styles';
import {ItemProps, useCounter} from '../../hooks/useCounter';

export function Config() {
  const {addCounter, removeCounter, counters, getSelected, updateCounter} =
    useCounter();
  const [selected, setSelected] = useState<ItemProps>({} as ItemProps);

  useEffect(() => {
    if (counters.length !== 0) {
      const count = getSelected();
      if (count) {
        return setSelected(count);
      }

      setSelected(counters[0]);
    } else {
      setSelected({} as ItemProps);
    }
  }, [getSelected, counters]);

  function handleAddCounter() {
    addCounter({
      counterId: counters.length + 1,
      counter: 0,
      title: 'Count ' + (counters.length + 1),
    });
  }

  function handleDeleteCounter(counterId: number) {
    return removeCounter(counterId);
  }

  function handleIncrementCounter() {
    const newCounters = counters.map(count =>
      count.counterId === selected.counterId
        ? {...count, counter: count.counter + 1}
        : count,
    );

    updateCounter(newCounters);
  }

  function handleDecrementCounter() {
    const newCounters = counters.map(count =>
      count.counterId === selected.counterId && count.counter > 0
        ? {...count, counter: count.counter - 1}
        : count,
    );

    updateCounter(newCounters);
  }

  return (
    <Container>
      <Header title="Config" />
      <Content>
        <View>
          <TextLabel>Counters</TextLabel>
          <WrapperButton>
            <Shadow>
              <Button onPress={() => handleAddCounter()}>
                <TextButton>Add {'\n'}Counter</TextButton>
              </Button>
            </Shadow>
            <Shadow>
              <Button onPress={() => handleDeleteCounter(selected?.counterId)}>
                <TextButton>Remove {'\n'} Counter</TextButton>
              </Button>
            </Shadow>
          </WrapperButton>
        </View>
        <View>
          <TextLabel>Selected Counter</TextLabel>
          <WrapperCounter>
            <TextCounter>{selected?.title || 'Not Counter'}</TextCounter>
            <Shadow>
              <BorderCounter>
                <CounterButton onPress={() => handleIncrementCounter()}>
                  <PlusButton />
                </CounterButton>
                <Separator />
                <TextCounterButton>{selected?.counter || 0}</TextCounterButton>
                <Separator />
                <CounterButton onPress={() => handleDecrementCounter()}>
                  <MinusButton />
                </CounterButton>
              </BorderCounter>
            </Shadow>
          </WrapperCounter>
        </View>
      </Content>
    </Container>
  );
}
