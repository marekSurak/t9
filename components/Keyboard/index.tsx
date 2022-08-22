import type { FC } from 'react'
import React from 'react'

import { Button } from 'components/Button'
import { keyboardButtons } from 'constants/keyboard'

import { ButtonNumber, ButtonText, KeyboardContainer } from './styled'

interface IProps {
  onButtonClick: (value: number) => void
}

const KeyboardComponent: FC<IProps> = ({ onButtonClick }) => {
  console.log('render')
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

export const Keyboard = React.memo(KeyboardComponent)
