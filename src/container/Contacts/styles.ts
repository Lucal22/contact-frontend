import styled, { css } from 'styled-components';

type ContactsStyleProps = {
  sending: boolean;
};

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 94vh;
    padding-top: 10rem;
    padding-bottom: 2rem;
    color: ${theme.colors.blackColor};
    @media (min-width: ${theme.screen.size.large}) {
      padding-top: 15rem;
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    text-align: center;

    p {
      padding: 1rem 0 3rem 0;
      font-size: ${theme.fonts.size.small};
    }
    @media (min-width: ${theme.screen.size.medium}) {
      p {
        font-size: ${theme.fonts.size.medium};
      }
    }
    @media (min-width: ${theme.screen.size.large}) {
      p {
        font-size: ${theme.fonts.size.big};
      }
    }
  `}
`;

export const NewContact = styled.form`
  ${({ theme }) => css`
    display: block;
    position: relative;
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
      input {
        width: 40rem;
        height: 4rem;
        padding: 0 1rem;
        margin-bottom: 2rem;
        font-size: ${theme.fonts.size.medium};
      }
    }
  `}
`;
export const FormField = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 4rem;
  }
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

export const ContactList = styled.div`
  display: block;
  position: relative;
`;

export const LoadContacts = styled.button`
  cursor: pointer;
  position: absolute;
  right: 0;
`;

export const Contacts = styled.div`
  padding-top: 3rem;
`;

//CARD

export const Card = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid black;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    display: flex;
    position: relative;
    align-items: center;
    height: 4.2rem;
    gap: 0.5rem;
    p {
      font-size: ${theme.fonts.size.medium};
    }
    @media (min-width: ${theme.screen.size.small}) {
      gap: 5rem;
    }
    @media (min-width: ${theme.screen.size.medium}) {
      p {
        font-size: ${theme.fonts.size.big};
      }
    }
  `}
`;

export const Name = styled.p`
  ${({ theme }) => css`
    min-width: 15rem;

    @media (min-width: ${theme.screen.size.medium}) {
      min-width: 25rem;
    }
  `}
`;

export const Phone = styled.p`
  ${({ theme }) => css`
    width: 100%;
    @media (min-width: ${theme.screen.size.small}) {
      text-align: center;
    }
  `}
`;

export const EditButton = styled.button`
  position: absolute;
  right: 3.2rem;
  background: none;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 0;
  background: none;
  cursor: pointer;
`;

//EDIT CARD

export const Edit = styled.div`
  display: flex;
  position: absolute;
  top: -25rem;
  z-index: 1;
  margin: auto;
  width: 100%;
`;

export const EditContent = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
    box-shadow: 1px 1px 1px 1px black;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;

    p {
      padding: 1rem 0 3rem 0;
      font-size: ${theme.fonts.size.small};
    }
  `}
`;

export const EditForm = styled.form`
  ${({ theme }) => css`
    input {
      width: 26rem;
      height: 3.5rem;
      margin-bottom: 1.5rem;
      padding: 0 0.5rem;
      font-size: ${theme.fonts.size.medium};
    }
  `}
`;

export const EditFormField = styled.div`
  position: relative;
  p {
    position: absolute;
    top: 50%;
    font-size: 1rem;
    text-align: center;
  }
`;

export const EditInput = styled.input``;

export const EditSubmitButton = styled.input`
  ${({ theme }) => css`
    margin-top: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    color: ${theme.colors.whiteColor};
    background-color: ${theme.colors.blueColor};
  `}
`;

export const EditCancelButton = styled.input`
  ${({ theme }) => css`
    border: none;
    border-radius: 0.5rem;
    color: ${theme.colors.whiteColor};
    background-color: ${theme.colors.grayColor};
  `}
`;
