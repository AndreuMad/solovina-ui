/* setup.js */

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

const copyProps = (src, target) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop)
    }), {});
  Object.defineProperties(target, props);
};

//
// Mock Canvas / Context2D calls
//
const mockCanvas = window => {
  window.HTMLCanvasElement.prototype.getContext = () => {
    return {
      fillRect       : () => null,
      clearRect      : () => null,
      getImageData   : (x, y, w, h) => ({ data: new Array(w * h * 4) }),
      putImageData   : () => null,
      createImageData: () => [],
      setTransform   : () => null,
      drawImage      : () => null,
      save           : () => null,
      fillText       : () => null,
      restore        : () => null,
      beginPath      : () => null,
      moveTo         : () => null,
      lineTo         : () => null,
      closePath      : () => null,
      stroke         : () => null,
      translate      : () => null,
      scale          : () => null,
      rotate         : () => null,
      arc            : () => null,
      fill           : () => null,
      measureText    : () => ({ width: 0 }),
      transform      : () => null,
      rect           : () => null,
      clip           : () => null
    };
  };

  window.HTMLCanvasElement.prototype.toDataURL = () => '';
};

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};

copyProps(window, global);
mockCanvas(window);
