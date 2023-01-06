import React from 'react';
import * as Styled from './styles';

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
        Criado por{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://portfolio-lucal.vercel.app/"
        >
          Lucal
        </a>
      </p>
    </Styled.Container>
  );
}
