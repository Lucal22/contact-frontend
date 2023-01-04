import { List, X } from 'phosphor-react';
import { useState } from 'react';
import * as Styled from './styles';
import list from '../list';
import Links from '../../../../components/Links';
import useAuth from '../../../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [menu, setMenu] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  function logout() {
    auth?.logout();
    navigate('/');
  }
  return (
    <>
      <Styled.Button aria-label="Abre/Fecha Menu">
        {!menu ? (
          <List
            aria-label="Abre Menu"
            onClick={() => {
              setMenu(true);
            }}
          />
        ) : (
          <X
            aria-label="Fecha Menu"
            onClick={() => {
              setMenu(false);
            }}
          />
        )}
      </Styled.Button>
      <Styled.Menu open={menu}>
        <Styled.Nav>
          {list.map((item) => {
            return (
              <Styled.MenuItens key={item.id}>
                <Links link={item.path} newTab={item.target}>
                  {item.name}
                </Links>
              </Styled.MenuItens>
            );
          })}
          {auth?.token ? (
            <Styled.Logout onClick={logout}>SAIR</Styled.Logout>
          ) : null}
        </Styled.Nav>
      </Styled.Menu>
    </>
  );
}
