import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding-top: 15rem;
    color: ${theme.colors.blackColor};
    p {
      font-size: ${theme.fonts.size.medium};
    }
  `}
`;
