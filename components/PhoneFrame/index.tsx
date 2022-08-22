import type { FC } from 'react'
import React from 'react'

import { MemoizedPhoneImage as PhoneImage } from './components/PhoneImage'
import { PhoneContainer, PhoneContent } from './styled'

interface IProps {
  children: React.ReactNode
}

export const PhoneFrame: FC<IProps> = ({ children }) => (
  <PhoneContainer>
    <PhoneImage />
    <PhoneContent>{children}</PhoneContent>
  </PhoneContainer>
)
