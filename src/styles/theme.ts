export const theme = {
  breakpoints: {
    $sm: '480px',
    $md: '640px',
    $lg: '768px',
    $xl: '960px',
  },
  fontSizes: {
    $sm: '0.75rem',
    $md: '1rem',
    $lg: '1.25rem',
    $xl: '1.5rem',
    $2xl: '1.75rem',
    $3xl: '2rem',
    $4xl: '2.25rem',
    $5xl: '2.5rem',
  },
  fontWeights: {
    thin: '100',
    extraLight: '200',
    light: '300',
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
    extraBold: '800',
    black: '900',
  },
  colors: {
    bg: {
      black20: 'rgba(0, 0, 0, 0.2)',
      black30: 'rgba(0, 0, 0, 0.3)',
      black70: 'rgba(0, 0, 0, 0.7)',
    },
  },
} as const;
