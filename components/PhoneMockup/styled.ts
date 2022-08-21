import { styled } from 'styles/stitches.config'

export const PhoneContainer = styled('div', {
  position: 'relative',
})

export const PhoneContent = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '$phoneWidth',
  height: '$phoneHeight',
  overflow: 'hidden',
  padding: '1.75rem $5 $4',
})

export const ImageContainer = styled('div', {
  position: 'absolute',
  top: '0',
  zIndex: '$phone',
})
