import React from 'react';
import * as Styled from './styles';
import ProtectedLayout from '../../components/ProtectedLayout';
import Container from '../../components/Container';

export type ContactsProps = {
  children: React.ReactNode;
};

export default function Contacts() {
  return (
    <ProtectedLayout>
      <Styled.Container>
        <Container height="full">
          <h1>LISTA DE CONTATOS</h1>
        </Container>
      </Styled.Container>
    </ProtectedLayout>
  );
}
