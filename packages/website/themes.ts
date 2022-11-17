const sharedStyles = {
  colors: {
    linkText: '#5F3DFF',
    secondary: '#9E88FC',
    secondary100: '#F7F6F9',
    secondary200: '#E6E1FA',
    secondary300: '#D5CCFA',
    secondary400: '#C3B6FB',
    secondary500: '#B2A1FC',
    secondary600: '#A18CFC',
    secondary700: '#9077FD',
    secondary800: '#7E61FE',
    secondary900: '#6D4CFE',
    primary: '#5F3DFF',
    primary100: '#F4F2FF',
    primary200: '#CABEFF',
    primary300: '#AA98FF',
    primary400: '#7F64FF',
    primary500: '#5F3DFF',
    primary600: '#5035DD',
    primary700: '#412CBA',
    primary800: '#2C218C',
    primary900: '#18165E',
    tertiary: '#FA9A1D',
    tertiaryText: '#000',
    tertiaryButtonText: '#000',
    tertiary100: '#FFF8F0',
    tertiary200: '#FEEBD2',
    tertiary300: '#FDD096',
    tertiary400: '#FBB559',
    tertiary500: '#FA9A1D',
    tertiary600: '#D37F17',
    tertiary700: '#AB6412',
    tertiary800: '#8D4F0E',
    tertiary900: '#7A420B',
    error: 'hsl(358, 69.4%, 55.2%)',
    error100: 'hsl(358, 69.4%, 95.2%)',
    success: 'hsl(152, 57.5%, 37.6%)',
    info: 'hsl(208, 100%, 47.3%)',
    warning: 'hsl(35, 100%, 55.5%)',
    default: 'hsl(206 22% 7% / 35%)',
    disabled: '#EBEBE4',
    disabled100: '#DDD',
  },
  space: {},
  sizes: {
    mobile: '360px',
    tablet: '768px',
    desktop: '1024px',
    'desktop-xl': '1280px',
    'desktop-2xl': '1680px',
  },
  fonts: {
    primary: 'Nunito Sans, apple-system, sans-serif',
    secondary: 'Druk, monospace',
  },
}

export const lightTheme = {
  ...sharedStyles,
  colors: {
    ...sharedStyles.colors,
    primaryText: '#000',
    primaryButtonText: '#fff',
    secondaryText: '#fff',
    secondaryButtonText: '#000',
  },
}

export const darkTheme = {
  ...sharedStyles,
  colors: {
    ...sharedStyles.colors,
    primary100: 'rgba(92, 55, 255, .2) !important',
    primary200: 'rgba(92, 55, 255, .4) !important',
    primaryText: '#fff !important',
    primaryButtonText: '#000 !important',
    secondaryText: '#000 !important',
    secondaryButtonText: '#fff !important',
  },
}
