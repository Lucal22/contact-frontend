import React from 'react';
import * as Styled from './styles';
import ProtectedLayout from '../../components/ProtectedLayout';

export type ContactsProps = {
  children: React.ReactNode;
};

export default function Contacts() {
  return (
    <ProtectedLayout>
      <Styled.Container>Contatos</Styled.Container>
    </ProtectedLayout>
  );
}
