import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 6vh;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 1rem;
    color: ${theme.colors.grayColor};
    p {
      font-size: ${theme.fonts.size.small};
    }
    a {
      color: ${theme.colors.blueColor};
    }
    @media (min-width: ${theme.screen.size.large}) {
      margin: 0;
    }
  `}
`;
