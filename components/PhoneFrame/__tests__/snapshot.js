import { render } from '@testing-library/react'
import { PhoneFrame } from 'components/PhoneFrame'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'

it('Renders Phone frame unchanged', () => {
  const { container } = render(
    <PhoneFrame>
      <Keyboard />
      <DeleteButton onClick={() => {}}>x</DeleteButton>
    </PhoneFrame>
  )
  expect(container).toMatchSnapshot()
})
