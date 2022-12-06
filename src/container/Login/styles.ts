import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blueColor};
  `}
`;
export const Content = styled.div`
  display: block;
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.size.medium}) {
      display: flex;
    } ;
  `}
`;

export const Login = styled.div`
  display: block;
`;

export const CreateAccount = styled.div`
  display: block;
`;

export const Form = styled.form`
  ${({ theme }) => css`
    color: ${theme.colors.blueColor};
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.blueColor};
  `}
`;
