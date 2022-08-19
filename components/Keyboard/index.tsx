import { Button } from 'components/Button'
import { keyboardButtons } from 'constants/keyboard'

import { KeyboardContainer } from './styled'

export const Keyboard = () => (
  <KeyboardContainer>
    {keyboardButtons.map((button) => (
      <Button key={button} type="button">
        {button}
      </Button>
    ))}
  </KeyboardContainer>
)
