import { styled } from 'styles/stitches.config'

export const HeaderContainer = styled('header', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '1.5rem',
  paddingRight: '0.5rem',
})

export const IconsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})
