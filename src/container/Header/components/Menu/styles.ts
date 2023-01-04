import styled, { css } from 'styled-components';

type MenuProps = {
  open: boolean;
};

export const Button = styled.button`
  ${({ theme }) => css`
    position: absolute;
    left: 5%;
    top: 25%;
    border: none;
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${theme.background.white};
    color: ${theme.colors.whiteColor};
    svg {
      width: 4rem;
      height: 3.4rem;
      color: ${theme.colors.grayColor};
    }

    @media (min-width: ${theme.screen.size.medium}) {
      display: none;
    }
  `}
`;

export const Menu = styled.div<MenuProps>`
  ${({ theme, open }) => css`
    display: ${open ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    width: 50%;
    padding: 1rem;
    height: 100vh;
    background-color: ${theme.background.white};
    box-shadow: 0 0 20px rgba(168, 168, 168, 0.15);

    @media (min-width: ${theme.screen.size.medium}) {
      display: none;
    }
  `}
`;

export const Logo = styled.a`
  max-width: 30rem;
`;

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.grayColor};
    font-size: ${theme.fonts.size.medium};
    a:hover {
      color: ${theme.colors.secondary};
    }
  `}
`;

export const MenuItens = styled.div`
  padding: 1rem;
`;

export const Logout = styled.p`
  ${({ theme }) => css`
    padding: 10px;
    cursor: pointer;
    font-size: ${theme.fonts.size.medium};
    color: red;
  `}
`;
