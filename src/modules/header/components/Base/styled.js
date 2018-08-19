import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContentBlock = styled.div`
  display: flex;
  height: ${props => props.theme.headerHeight.xs.normal};
  align-items: center;
  transition: height .15s ease-out;

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    height: ${props => props.theme.headerHeight.lg.normal};
  }
`;

export const MainLogoStyled = styled.figure`
  width: 48px;
  transition: width .15s ease-out;
  
  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    width: 88px;
  }
`;

export const MainNavStyled = styled.nav`
  position: fixed;
  top: ${props => props.theme.headerHeight.xs.normal};
  left: 0;
  right: 0;
  padding: 0 24px;
  opacity: 0;
  background-color: rgba(255, 255, 255, .75);
  pointer-events: none;
  transition: opacity .15s ease-out;

  &.is-active {
    opacity: 1;
    pointer-events: auto;
  }

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

  &.sticky {
    box-shadow: 0 1px 10px rgba(0, 0, 0, .1);

    ${ContentBlock} {
      height: ${props => props.theme.headerHeight.xs.sticky};
    };

    ${MainLogoStyled} {
      width: 36px;
    }

    ${MainNavStyled} {
      top: ${props => props.theme.headerHeight.xs.sticky};
    }
  }

  @media(min-width: ${props => props.theme.screenBreakpoints.lg}) {
    ${ContentBlock} {
      height: ${props => props.theme.headerHeight.lg.normal};
    };

    &.sticky {
      ${ContentBlock} {
        height: ${props => props.theme.headerHeight.lg.sticky};
      };

      ${MainLogoStyled} {
        width: 52px;
      }
    }
  }
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

  &.is-active {
    ${props => props.type === 'squeeze' && `
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
    `}
  }
`;
