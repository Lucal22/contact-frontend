import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    h1 {
      text-align: center;
      padding-bottom: 1rem;
      color: ${theme.colors.blackColor};
      font-size: ${theme.fonts.size.big};
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  ${({ theme }) => css`
    @media (min-width: ${theme.screen.size.medium}) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 30px;
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
    width: 30rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    color: ${theme.colors.whiteColor};
    background-color: ${theme.colors.blueColor};
  `}
`;
