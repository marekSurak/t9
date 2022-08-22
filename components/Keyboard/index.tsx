import type { FC } from 'react'
import React from 'react'

import { Button } from 'components/Button'
import { keyboardButtons } from 'constants/keyboard'

import { ButtonNumber, ButtonText, KeyboardContainer } from './styled'

interface IProps {
  onButtonClick: (value: number) => void
}

const Keyboard: FC<IProps> = ({ onButtonClick }) => (
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

export const MemoizedKeyboard = React.memo(Keyboard)
