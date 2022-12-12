import { List, X } from 'phosphor-react';
import { useState } from 'react';
import * as Styled from './styles';
import list from '../list';
import Links from '../../../../components/Links';

export default function Menu() {
  const [menu, setMenu] = useState(false);
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
        </Styled.Nav>
      </Styled.Menu>
    </>
  );
}
