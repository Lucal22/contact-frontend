import styled, { css } from 'styled-components';

type ContactsStyleProps = {
  sending: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 15rem;
    text-align: center;
    color: ${theme.colors.blackColor};
    @media (min-width: ${theme.screen.size.large}) {
      padding-top: 20rem;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    p {
      padding: 1rem 0 3rem 0;
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const NewContact = styled.form`
  ${({ theme }) => css`
    display: block;
    input {
      width: 100%;
      height: 4rem;
      padding: 0 1rem;
      margin-bottom: 2rem;
      font-size: ${theme.fonts.size.medium};
    }

    @media (min-width: ${theme.screen.size.large}) {
      display: flex;
      justify-content: center;
      gap: 3rem;
    }
  `}
`;

export const AddButton = styled.input<ContactsStyleProps>`
  ${({ theme, sending }) => css`
    cursor: pointer;
    width: 100%;
    height: 4rem;
    border: none;
    border-radius: 0.5rem;
    font-size: ${theme.fonts.size.medium};
    color: ${theme.colors.whiteColor};
    background-color: ${sending
      ? theme.colors.grayColor
      : theme.colors.blueColor};
  `}
`;
