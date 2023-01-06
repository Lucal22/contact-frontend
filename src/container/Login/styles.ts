import styled, { css } from 'styled-components';

type LoginStyleProps = {
  creating: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 94vh;
    h1 {
      text-align: center;
      padding-bottom: 1rem;
      color: ${theme.colors.blackColor};
      font-size: ${theme.fonts.size.big};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      h1 {
        font-size: ${theme.fonts.size.xBig};
      }
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    padding-top: 10rem;
    p {
      text-align: center;
      font-size: ${theme.fonts.size.medium};
      padding-bottom: 2rem;
    }
    @media (min-width: ${theme.screen.size.large}) {
      padding-top: 15rem;
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
      padding-top: 5rem;
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

export const FormField = styled.div`
  position: relative;
  padding-bottom: 2rem;
  p {
    position: absolute;
  }
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 30rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.blackColor};

    @media (min-width: ${theme.screen.size.large}) {
      width: 40rem;
      font-size: ${theme.fonts.size.medium};
    } ;
  `}
`;

export const Button = styled.input<LoginStyleProps>`
  ${({ theme, creating }) => css`
    cursor: pointer;
    width: 30rem;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    color: ${theme.colors.whiteColor};
    background-color: ${creating
      ? theme.colors.grayColor
      : theme.colors.blueColor};
    @media (min-width: ${theme.screen.size.large}) {
      width: 40rem;
    } ;
  `}
`;
