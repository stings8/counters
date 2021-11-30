import React, {createContext, ReactNode, useContext, useState} from 'react';

type CounterProviderProps = {
  children: ReactNode;
};

type CounterContextData = {
  counters: ItemProps[];
  addCounter: (count: ItemProps) => void;
  removeCounter: (counterId: number) => void;
  setSelected: (counterId: number) => void;
  getSelected: () => ItemProps;
  updateCounter: (counters: ItemProps[]) => void;
};

export type ItemProps = {
  counterId: number;
  title: string;
  counter: number;
};

const CounterContext = createContext<CounterContextData>({
  counters: [],
  addCounter: () => {},
  removeCounter: () => {},
  setSelected: () => {},
  getSelected: () => ({} as ItemProps),
  updateCounter: () => {},
});

export function CounterProvider({children}: CounterProviderProps): JSX.Element {
  const [counters, setCounters] = useState<ItemProps[]>(() => {
    return [];
  });
  const [selectedItem, setSelectedItem] = useState(0);

  const addCounter = (count: ItemProps) => {
    setCounters([...counters, count]);
  };

  const removeCounter = (counterId: number) => {
    const newCounters = counters.filter(count => count.counterId !== counterId);
    setCounters(newCounters);
  };

  const getSelected = () => {
    const selected = counters.filter(count => count.counterId === selectedItem);
    return selected[0];
  };

  const setSelected = (counterId: number) => {
    setSelectedItem(counterId);
  };

  const updateCounter = (counters: ItemProps[]) => {
    setCounters(counters);
  };

  return (
    <CounterContext.Provider
      value={{
        counters,
        addCounter,
        removeCounter,
        setSelected,
        getSelected,
        updateCounter,
      }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter(): CounterContextData {
  const context = useContext(CounterContext);

  return context;
}
