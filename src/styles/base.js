const baseStyles = `
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
  
  html {
    position: relative;
    min-height: 100%;
  }
  
  body {
    height: 100%;
    min-height: .1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
  
  input[type='text'],
  input[type='tel'],
  input[type='email'],
  input[type='password'],
  input[type='search'],
  textarea {
    &:focus {
      &::-webkit-input-placeholder {
        color: transparent !important;
      }
  
      &::-moz-placeholder {
        color: transparent !important;
      }
  
      &:-ms-input-placeholder {
        color: transparent !important;
      }
    }
  }
`;

export default baseStyles;
