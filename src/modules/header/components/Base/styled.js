import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentBlock = styled.div`
  display: flex;
  height: ${props => props.headerIsSticky ? props.theme.headerHeight.xs.sticky : props.theme.headerHeight.xs.normal};
  align-items: center;
  transition: height .15s ease-out;
  
  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    height: ${props => props.headerIsSticky ? props.theme.headerHeight.lg.sticky : props.theme.headerHeight.lg.normal};
  }
`;

export const MainLogoStyled = styled.figure`
  width: ${props => props.headerIsSticky ? '36px' : '48px'};
  transition: width .15s ease-out;

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    width: ${props => props.headerIsSticky ? '52px' : '88px'};
  }
`;

export const MainNavStyled = styled.nav`
  position: fixed;
  top: ${props => props.headerIsSticky ? props.theme.headerHeight.xs.sticky : props.theme.headerHeight.xs.normal};
  left: 0;
  right: 0;
  padding: 0 24px;
  background-color: rgba(255, 255, 255, .75);
  transition: opacity .15s ease-out;

  ${props => props.isActive ? `
    opacity: 1;
    pointer-events: auto;
  ` : `
    opacity: 0;
    pointer-events: none;
  `};

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    position: static;
    display: flex;
    margin: 0 -16px;
    padding: 0;
    opacity: 1;
    pointer-events: auto;
  }
`;

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  ${props => props.headerIsSticky && `
    box-shadow: 0 1px 10px rgba(0, 0, 0, .1);
  `};
`;

export const NavLinkStyled = styled(NavLink)`
  display: block;
  padding: 12px 0;
  color: ${props => props.theme.textBase};
  font-size: 18px;
  text-decoration: none;
  
  &.active {
    color: ${props => props.theme.baseRed};
    font-weight: 500;
  }

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    display: inline-block;
    margin: 0 16px;
  }
`;

export const HamburgerStyled = styled.div`
  display: inline-block;
  padding: ${props => `${props.hamburgerPaddingY || 15}px ${props.hamburgerPaddingX || 15}px`};
  cursor: pointer;

  transition-property: opacity, filter;
  transition-duration: ${props => props.hamburgerHoverTransitionDuration || '.15s'};
  transition-timing-function: ${props => props.hamburgerHoverTransitionTimingFunction || 'linear'};

  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    display: none;
  }

  .hamburger-box {
    width: ${props => props.hamburgerLayerWidth || 40}px;
    height: ${props => ((props.hamburgerLayerHeight || 4) * 3) + ((props.hamburgerLayerSpacing || 6) * 2)}px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: ${props => (props.hamburgerLayerHeight || 4) / -2}px;

    &,
    &::before,
    &::after {
      width: ${props => props.hamburgerLayerWidth || 40}px;
      height: ${props => props.hamburgerLayerHeight || 4}px;
      background-color: ${props => props.hamburgerLayerColor || props.theme.textBase};
      border-radius: ${props => props.hamburgerLayerBorderRadius || 4}px;
      position: absolute;
      transition-property: transform;
      transition-duration: .15s;
      transition-timing-function: ease;
    }
  
    &::before,
    &::after {
      content: '';
      display: block;
    }
  
    &::before {
      top: ${props => ((props.hamburgerLayerSpacing || 6) + (props.hamburgerLayerHeight || 4)) * -1}px;
    }
  
    &::after {
      bottom: ${props => ((props.hamburgerLayerSpacing || 6) + (props.hamburgerLayerHeight || 4)) * -1}px;
    }
  }
  
  ${props => props.type === 'squeeze' && `
    .hamburger-inner {
      transition-duration: .075s;
      transition-timing-function: cubic-bezier(.55, .055, .675, .19);

      &::before {
        transition: top .075s .12s ease,
                    opacity .075s ease;
      }

      &::after {
        transition: bottom .075s .12s ease,
                    transform .075s cubic-bezier(.55, .055, .675, .19);
      }
    }
  `}

  ${props => props.isActive && props.type === 'squeeze' && `
    .hamburger-inner {
      transform: rotate(45deg);
      transition-delay: .12s;
      transition-timing-function: cubic-bezier(.215, .61, .355, 1);

      &::before {
        top: 0;
        opacity: 0;
        transition: top .075s ease,
                    opacity .075s .12s ease;
      }

      &::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom .075s ease,
                    transform .075s .12s cubic-bezier(.215, .61, .355, 1);
      }
    }
  `};
`;
