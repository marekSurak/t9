import { styled } from 'styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$button',

  border: 'none',
  borderRadius: '50%',
  padding: '$3',
  width: '$4',
  height: '$4',

  '&:hover': {
    background: '$buttonHover',
  },
})
