import type { FC } from 'react'
import React from 'react'

import { Button, ButtonContainer } from './styled'

interface IProps {
  onClick: () => void
  children: React.ReactNode
}

const DeleteButton: FC<IProps> = ({ onClick, children }) => (
  <ButtonContainer>
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  </ButtonContainer>
)

export const MemoizedDeleteButton = React.memo(DeleteButton)
