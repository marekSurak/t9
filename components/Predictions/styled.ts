import { styled } from 'styles/stitches.config'

export const PredictionsContainer = styled('ul', {
  display: 'flex',
  gap: '$4',
  alignSelf: 'center',
  overflowX: 'scroll',
  padding: '0 $2',
})
export const PredictionItem = styled('li', {
  fontSize: '$4',

  '&:first-of-type': {
    fontWeight: '$bold',
    fontSize: '$5',
  },
})

export const Separator = styled('div', {
  borderRight: '1px solid $button',
})
