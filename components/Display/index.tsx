import type { FC } from 'react'

import { DisplayContainer } from './styled'

interface IProps {
  children: React.ReactNode
}

export const Display: FC<IProps> = ({ children }) => (
  <DisplayContainer>{children}</DisplayContainer>
)
