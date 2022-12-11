import styled from '@emotion/styled';

export const BtnStyled = styled.button`
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  margin: 0 auto;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.accent};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  justify-content: center;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.radii.none};
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.purple};
    box-shadow: ${p => p.theme.shadows.active};
  }
`;
