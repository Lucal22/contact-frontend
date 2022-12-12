import React from 'react';
import list from '../list';
import Links from '../../../../components/Links';
import * as Styled from './styles';

export type NavProps = {
  children: React.ReactNode;
};

export default function Nav() {
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
      </Styled.List>
    </Styled.Nav>
  );
}
