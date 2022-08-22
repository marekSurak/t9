import { render } from '@testing-library/react'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { keyboardButtons } from 'constants/keyboard'

describe('Keyboard', () => {
  test('renders correct amount of buttons', () => {
    const { getAllByRole } = render(<Keyboard />)
    const buttonsLength = getAllByRole('button')

    expect(buttonsLength.length).toBe(keyboardButtons.length)
  })
})
