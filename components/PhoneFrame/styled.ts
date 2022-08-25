import { styled } from 'styles/stitches.config'

export const PhoneContainer = styled('section', {
  position: 'relative',
})

export const PhoneContent = styled('div', {
  display: 'grid',
  gridAutoRows: '1fr 2fr 2fr 1fr 2fr',
  position: 'relative',

  width: '$phoneWidth',
  height: '$phoneHeight',
  overflow: 'hidden',
  padding: '0 $4 $4',
})
