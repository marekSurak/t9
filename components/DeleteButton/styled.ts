import { styled } from 'styles/stitches.config'

export const ButtonContainer = styled('div', {
  position: 'absolute',
  bottom: '4rem',
  right: '4.5rem',
})

export const Button = styled('button', {
  border: 'none',
  position: 'relative',
  width: '1.5rem',
  height: '1.5rem',
  background: '$button',
  fontSize: '$4',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-start',

  '&:hover': {
    background: '$buttonHover',

    '&::before': {
      borderRight: '0.75rem solid $buttonHover',
    },
  },

  '&::before': {
    content: '',
    position: 'absolute',
    left: '-0.75rem',
    top: '0',
    borderTop: '0.75rem solid transparent',
    borderBottom: '0.75rem solid transparent',
    borderRight: '0.75rem solid $button',
  },
})
