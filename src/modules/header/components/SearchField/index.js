import React, { Component } from 'react';
import {
  SearchWrapStyled,
  SearchFieldStyled,
  SearchIconStyled
} from './styled';

class SearchField extends Component {
  render() {
    return (
      <SearchWrapStyled>
        <SearchIconStyled icon="search"/>
        <SearchFieldStyled type="text" />
      </SearchWrapStyled>
    );
  }
}

export default SearchField;
