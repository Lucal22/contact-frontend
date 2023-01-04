import React from 'react';
import list from '../list';
import Links from '../../../../components/Links';
import * as Styled from './styles';
import useAuth from '../../../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export type NavProps = {
  children: React.ReactNode;
};

export default function Nav() {
  const auth = useAuth();
  const navigate = useNavigate();

  function logout() {
    auth?.logout();
    navigate('/');
  }
  return (
    <Styled.Nav>
      <Styled.List>
        {list.map((item) => {
          return (
            <Styled.Item key={item.id}>
              <Links link={item.path} newTab={item.target}>
                {item.name}
              </Links>
            </Styled.Item>
          );
        })}
        {auth?.token ? (
          <Styled.Logout onClick={logout}>SAIR</Styled.Logout>
        ) : null}
      </Styled.List>
    </Styled.Nav>
  );
}
