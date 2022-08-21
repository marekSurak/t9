import { styled } from 'styles/stitches.config'

export const KeyboardContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  // width: '11rem',
  gap: '$2',

  '& button:last-of-type': {
    gridColumnEnd: '3',
  },
})

export const ButtonNumber = styled('span', {
  fontSize: '$5',
})
export const ButtonText = styled('span', {
  fontSize: '$1',
})
