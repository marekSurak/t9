import type { FC } from 'react'
import React from 'react'

import { Button } from 'components/Button'
import { keyboardButtons } from 'constants/keyboard'

import { KeyboardContainer } from './styled'

interface IProps {
  onButtonClick: (value: number) => void
}

export const Keyboard: FC<IProps> = ({ onButtonClick }) => {
  return (
    <KeyboardContainer>
      {keyboardButtons.map((button) => (
        <Button
          key={button}
          type="button"
          onClick={() => onButtonClick(button)}
        >
          {button}
        </Button>
      ))}
    </KeyboardContainer>
  )
}
