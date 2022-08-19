import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      montserrat: 'Montserrat, -aple-system, system-ui',
    },
    colors: {
      button: '#e5e5e4',
      buttonHover: '#c6c6c6',
    },
    fontSizes: {
      1: '11px',
      2: '13px',
      3: '15px',
      4: '19px',
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    radii: {},
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
    },
    sizes: {
      1: '1rem',
      2: '2rem',
      3: '3rem',
      4: '4rem',
    },
    shadows: {},
  },
})
