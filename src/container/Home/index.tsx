import React from 'react';
import * as Styled from './styles';

export type HomeProps = {
  children: React.ReactNode;
};

export default function Home() {
  return (
    <Styled.Container>
      <h1>Olá mundo</h1>
    </Styled.Container>
  );
}
