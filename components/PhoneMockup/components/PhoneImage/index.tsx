import Image from 'next/image'
import React from 'react'

import IphoneImageSrc from 'public/images/iphone.png'

import { ImageContainer } from './styled'

const PhoneImage = () => (
  <ImageContainer>
    <Image
      src={IphoneImageSrc}
      width="372"
      height="750"
      alt="Iphone image"
      placeholder="blur"
    />
  </ImageContainer>
)

export const MemoizedPhoneImage = React.memo(PhoneImage)
