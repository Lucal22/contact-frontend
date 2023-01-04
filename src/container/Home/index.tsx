import React from 'react';
import Container from '../../components/Container';
import * as Styled from './styles';

export type HomeProps = {
  children: React.ReactNode;
};

export default function Home() {
  return (
    <Styled.Container>
      <Container height={'full'}>
        <h1>Olá mundo</h1>
      </Container>
    </Styled.Container>
  );
}
