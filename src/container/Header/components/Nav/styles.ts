import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: none;
    @media (min-width: ${theme.screen.size.medium}) {
      display: block;
      margin: 0 auto;
      width: 50%;
      height: 8rem;
      h1 {
        cursor: pointer;
      }
    } ;
  `}
`;

export const List = styled.ul`
  ${({ theme }) => css`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: ${theme.spaces.xLarge};
  `}
`;

export const Item = styled.li`
  ${({ theme }) => css`
    list-style-type: none;
    text-decoration: none;
    font-size: ${theme.fonts.size.small};
    font-weight: 500;
    &:hover {
      color: ${theme.colors.blackColor};
      transition: all 0.3s ease-in-out;
    }
  `}
`;
