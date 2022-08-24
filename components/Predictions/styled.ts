import { styled } from 'styles/stitches.config'

export const PredictionsContainer = styled('div', {
  alignSelf: 'center',
  textAlign: 'center',
})

export const PredicitonList = styled('ul', {
  display: 'flex',
  width: 'calc($phoneWidth - 4rem)',
  gap: '$4',
  padding: '0 $2 $3',
  overflowX: 'scroll',

  // hide scrollbar for Firefox & Chrome
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
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
