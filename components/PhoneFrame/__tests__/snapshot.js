import { render } from '@testing-library/react'
import { PhoneFrame } from 'components/PhoneFrame'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'
import { MemoizedCheckbox as Checkbox } from 'components/Checkbox'

it('Renders Phone frame unchanged', () => {
  const { container } = render(
    <PhoneFrame>
      <Checkbox checked={false} onClick={() => {}} />
      <Keyboard />
      <DeleteButton onClick={() => {}}>x</DeleteButton>
    </PhoneFrame>
  )
  expect(container).toMatchSnapshot()
})
