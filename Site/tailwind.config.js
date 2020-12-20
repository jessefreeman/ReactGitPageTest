module.exports = {
  purge: [
    'public/index.html',
    'src/**/*.js',
    'src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          0: '#2d1b2e',
          1: '#218a91',
          2: '#3cc2fa',
          3: '#9af6fd',
          4: '#4a247c',
          5: '#574b67',
          6: '#937ac5',
          7: '#8ae25d',
          8: '#8e2b45',
          9: '#f04156',
          10: '#f272ce',
          11: '#d3c0a8',
          12: '#c5754a',
          13: '#b9a895',
          14: '#f7db53',
          15: '#f9f4ea'
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'architects-daughter': ['"Architects Daughter"', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      customForms: theme => ({
        default: {
          'input, textarea, multiselect, select, checkbox, radio': {
            backgroundColor: 'transparent',
            borderColor: theme('colors.gray.700'),
            borderRadius: theme('borderRadius.sm'),
            '&:focus': {
              outline: undefined,
              boxShadow: undefined,
              borderColor: theme('colors.gray.500'),
            },
          },
          'input, textarea, multiselect, select': {
            backgroundColor: 'transparent',
            fontSize: undefined,
            lineHeight: undefined,
            paddingTop: theme('spacing.3'),
            paddingRight: theme('spacing.4'),
            paddingBottom: theme('spacing.3'),
            paddingLeft: theme('spacing.4'),
          },
          'input, textarea': {
            '&::placeholder': {
              color: theme('colors.gray.500'),
            },
          },
          select: {
            paddingRight: theme('spacing.10'),
            iconColor: theme('colors.gray.500'),
          },
          'checkbox, radio': {
            color: theme('colors.purple.600'),
            backgroundColor: 'transparent',
          },
        },
      }),
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'group-hover'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
};
