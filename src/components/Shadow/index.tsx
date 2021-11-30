import React, {ReactNode} from 'react';
import {Container} from './styles';

type Props = {
  children: ReactNode;
};

export function Shadow({children}: Props) {
  return (
    <Container
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
      {children}
    </Container>
  );
}
