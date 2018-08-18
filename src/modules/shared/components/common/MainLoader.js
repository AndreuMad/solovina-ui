import React from 'react';

export default function Loader() {
  // Tip: this styles injected to remove "blinking"
  // while css external css is not loaded
  const loaderContainerStyle = {
    position      : 'fixed',
    zIndex        : 9999,
    top           : 0,
    left          : 0,
    right         : 0,
    bottom        : 0,
    display       : 'flex',
    justifyContent: 'center',
    alignItems    : 'center',
    width         : '100%',
    height        : '100%',
    background    : 'rgba(255, 255, 255, 0.85)'
  };
  const logoStyles = {
    position  : 'absolute',
    transform : 'translate(-50%, -50%)',
    top       : '50%',
    left      : '50%',
    fontSize  : '2em',
    fontWeight: 600,
    fontFamily: 'Roboto, sans-serif',
    color     : '#8cc904'
  };

  return (
    <div className="loader-container" style={loaderContainerStyle}>
      <div className="loader">
        <div style={logoStyles} className="loader-logo">{'ctrl'}</div>
        <svg className="circular" viewBox="25 25 50 50" width="125">
          <circle className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="1"
                  strokeMiterlimit="10"
                  stroke="#8cc904"
          />
        </svg>
      </div>
    </div>
  );
}
