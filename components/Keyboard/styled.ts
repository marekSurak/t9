import { styled } from 'styles/stitches.config'

export const KeyboardContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  width: '11rem',
  gap: '$2',

  '& button:last-of-type': {
    gridColumnEnd: '3',
  },
})
