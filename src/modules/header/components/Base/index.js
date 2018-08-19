import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { locales } from '../../../../constants';
import SearchField from '../SearchField';
import mainLogo from '../../../../assets/img/main-logo.png';
import {
  HeaderStyled,
  ContentBlock,
  MainLogoStyled,
  MainNavStyled,
  NavLinkStyled,
  HamburgerStyled
} from './styled';

class Header extends Component {
  constructor(props) {
    super(props);

    this.headerNode = React.createRef();
    this.navigationNode = React.createRef();
    this.hamburgerNode = React.createRef();

    this.menuOpened = false;

    this.handleScroll = debounce(this.handleScroll.bind(this), 150);
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const $headerNode = this.headerNode.current;
    const isSticky = $headerNode.classList.contains('sticky');
    const shouldBeSticky = !!window.pageYOffset;

    if (!isSticky && shouldBeSticky) {
      $headerNode.classList.add('sticky');
    } else if (isSticky && !shouldBeSticky) {
      $headerNode.classList.remove('sticky');
    }
  }

  handleNavigation() {
    const $navigationNode = this.navigationNode.current;
    const $hamburgerNode = this.hamburgerNode.current;

    if (this.menuOpened) {
      this.menuOpened = false;

      $navigationNode.classList.remove('is-active');
      $hamburgerNode.classList.remove('is-active');
    } else {
      this.menuOpened = true;

      $navigationNode.classList.add('is-active');
      $hamburgerNode.classList.add('is-active');
    }
  }

  render() {
    return (
      <HeaderStyled innerRef={this.headerNode}>
        <div className="container">
          <div className="row">
            <div className="col-3 col-md-2 d-flex align-items-center">
              <ContentBlock>
                <NavLink to="/main">
                  <MainLogoStyled>
                    <img src={mainLogo} alt="Мова" title="Мова" />
                  </MainLogoStyled>
                </NavLink>
              </ContentBlock>
            </div>
            <div className="col-9 col-md-10 d-flex align-items-center justify-content-end">
              <ContentBlock>
                <MainNavStyled innerRef={this.navigationNode}>
                  <NavLinkStyled
                    to="/main"
                    activeClassName="active"
                  >
                    <span>{locales.header.links.main}</span>
                  </NavLinkStyled>
                  <NavLinkStyled
                    to="/advices"
                    activeClassName="active"
                  >
                    <span>{locales.header.links.advices}</span>
                  </NavLinkStyled>
                  <NavLinkStyled
                    to="/articles"
                    activeClassName="active"
                  >
                    <span>{locales.header.links.articles}</span>
                  </NavLinkStyled>
                  <NavLinkStyled
                    to="/vocabulary"
                    activeClassName="active"
                  >
                    <span>{locales.header.links.vocabulary}</span>
                  </NavLinkStyled>
                  <NavLinkStyled
                    to="/about-us"
                    activeClassName="active"
                  >
                    <span>{locales.header.links.aboutUs}</span>
                  </NavLinkStyled>
                </MainNavStyled>
                <SearchField />
                <HamburgerStyled
                  innerRef={this.hamburgerNode}
                  type="squeeze"
                  hamburgerPaddingY={6}
                  hamburgerPaddingX={6}
                  hamburgerLayerWidth={24}
                  hamburgerLayerHeight={3}
                  hamburgerLayerSpacing={4}
                  onClick={this.handleNavigation}
                >
                  <div className="hamburger-box">
                    <div className="hamburger-inner" />
                  </div>
                </HamburgerStyled>
              </ContentBlock>
            </div>
          </div>
        </div>
      </HeaderStyled>
    );
  }
}

export default Header;
