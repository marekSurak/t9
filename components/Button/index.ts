import { styled } from 'styles/stitches.config'

export const Button = styled('button', {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$lightGray',

  border: 'none',
  borderRadius: '50%',
  padding: '$3',
  width: '$5',
  height: '$5',

  '&:hover': {
    background: '$dimGray',
  },
})
