import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SearchWrapStyled = styled.div`
  position: relative;
  display: none;
  margin-left: 24px;

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    display: block;
  }
`;

export const SearchFieldStyled = styled.input`
  width: 36px;
  height: 36px;
  border: 0;
  border-bottom: 1px solid transparent;
  padding-right: 20px;
  background-color: transparent;
  outline: 0;
  font-size: 0;
  transition: width .15s ease-out;

  &:focus {
    width: 128px;
    border-bottom-color: ${props => props.theme.baseRed};
    font-size: 16px;
  }
`;

export const SearchIconStyled = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 0;
  color: ${props => props.theme.baseRed};
  transform: translateY(-50%);
  pointer-events: none;
`;
