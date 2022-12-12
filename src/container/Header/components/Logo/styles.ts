import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: none;
    color: ${theme.colors.grayColor};
    @media (min-width: ${theme.screen.size.medium}) {
      display: block;
      position: absolute;
      top: 25%;
      cursor: pointer;
    } ;
  `}
`;
