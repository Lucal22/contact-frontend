import React from 'react';
import * as Styled from './styles';
import Links from '../../components/Links';

export type FooterProps = {
  children: React.ReactNode;
};

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Styled.Container>
      <p>Copyright © {year}</p>
      <p>
        Made by{' '}
        <Links link={'https://lucaldev.com/'} newTab={true}>
          Lucal
        </Links>
      </p>
    </Styled.Container>
  );
}
