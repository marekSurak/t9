import Image from 'next/image'
import type { FC } from 'react'

import IphoneImageSrc from 'public/images/iphone.png'

import { PhoneContainer, ImageContainer, PhoneContent } from './styled'

interface IProps {
  children: React.ReactNode
}

export const PhoneMockup: FC<IProps> = ({ children }) => (
  <PhoneContainer>
    <ImageContainer>
      <Image src={IphoneImageSrc} alt="Iphone image" placeholder="blur" />
    </ImageContainer>
    <PhoneContent>{children}</PhoneContent>
  </PhoneContainer>
)
