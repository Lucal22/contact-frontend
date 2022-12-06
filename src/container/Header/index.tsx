import React from 'react';
import * as Styled from './styles';

export type HeaderProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <Styled.Container>
      <h1></h1>
    </Styled.Container>
  );
}
