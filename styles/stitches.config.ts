import { createStitches } from '@stitches/react'

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      montserrat: 'Montserrat, -aple-system, system-ui',
    },
    colors: {},
    fontSizes: {
      1: '13px',
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
    shadows: {},
  },
})
