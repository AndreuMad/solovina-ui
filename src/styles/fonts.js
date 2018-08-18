import fonts from '../assets/fonts';

let fontsStyles = '';

fonts.forEach(font => {
  font.variations.forEach(variation => {
    fontsStyles += `
      @font-face {
        font-family: '${font.family}';
        font-style: ${variation.style};
        font-weight: ${variation.weight};
        src: local(${variation.localNamePrimary}), local(${variation.localNameSecondary}),
             url('${variation.woff}') format(woff),
             url('${variation.woff2}') format(woff2);
      }
    `;
  });
});

export default fontsStyles;
