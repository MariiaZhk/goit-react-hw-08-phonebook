export const theme = Object.freeze({
  colors: {
    white: '#ffffff',
    lightBlue: '#7a9bbd',
    darkBlue: '#25405d',
    hoverButton: '#3d658f',
    gray: '#b5b6b8',
  },
  fontSizes: {
    small: '16px',
    medium: '24px',
    large: '32px',
    extraLarge: '48px',
  },

  fontWeights: {
    normal: '400',
    semiBold: '600',
    extraBold: '900',
  },

  borderRadius: {
    formBorder: '8px',
    wrapperBorder: '40px',
    inputBorder: '60px',
    buttonBorder: '100px',
  },

  spacing: value => `${4 * value}px`,

  shadows: {
    small:
      '8px 8px 8px 0 rgba(0, 0, 0, 0.323), 0 8px 6px 0 rgba(0, 0, 0, 0.19)',
    regular:
      '8px 8px 8px 8px rgba(0, 0, 0, 0.323), 8px 8px 20px 8px rgba(0, 0, 0, 0.19)',
  },
});
