import { styled } from 'styles/stitches.config'

export const PredictionsContainer = styled('ul', {
  display: 'flex',
  gap: '$3',
  overflowX: 'scroll',
  width: 'calc($phoneWidth - $2)',
})
export const PredictionItem = styled('li', {
  fontSize: '$4',
})

export const Separator = styled('div', {
  borderRight: '1px solid $button',
})
