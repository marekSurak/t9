import type { FC } from 'react'

import { Button, ButtonContainer } from './styled'

interface IProps {
  onClick: () => void
  children: React.ReactNode
}

export const DeleteButton: FC<IProps> = ({ onClick, children }) => (
  <ButtonContainer>
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  </ButtonContainer>
)
