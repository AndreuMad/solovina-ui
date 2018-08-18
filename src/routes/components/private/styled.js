import styled from 'styled-components';

export const WrapperStyled = styled.div`
  width: 100%;
  max-height: 100vh;
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.textBase};
  font-family: ${props => props.theme.baseFontFamily};
`;
