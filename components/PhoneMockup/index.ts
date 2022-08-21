import { styled } from 'styles/stitches.config'

export const PhoneMockup = styled('div', {
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '$phoneWidth',
  height: '$phoneHeight',
  overflow: 'hidden',
  padding: '$2 $3',

  border: '1px solid black',
})
