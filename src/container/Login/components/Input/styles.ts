import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-bottom: 2rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 30rem;
    height: 4rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.blackColor};
  `}
`;
