import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.blackColor};
    padding: 10rem;
    h1 {
      text-align: center;
    }
  `}
`;
