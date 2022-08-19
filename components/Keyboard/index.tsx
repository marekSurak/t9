import type { FC } from 'react'
import React from 'react'

import { Button } from 'components/Button'
import { keyboardButtons } from 'constants/keyboard'

import { ButtonNumber, ButtonText, KeyboardContainer } from './styled'

interface IProps {
  onButtonClick: (value: number) => void
}

export const Keyboard: FC<IProps> = ({ onButtonClick }) => {
  return (
    <KeyboardContainer>
      {keyboardButtons.map((button) => (
        <Button
          key={button.value}
          type="button"
          onClick={() => onButtonClick(button.value)}
        >
          <ButtonNumber>{button.value}</ButtonNumber>
          <ButtonText>{button.label}</ButtonText>
        </Button>
      ))}
    </KeyboardContainer>
  )
}
