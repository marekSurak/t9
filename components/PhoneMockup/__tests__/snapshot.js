import { render } from '@testing-library/react'
import { PhoneMockup } from 'components/PhoneMockup'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'

it('Renders Phone frame unchanged', () => {
  const { container } = render(
    <PhoneMockup>
      <Keyboard />
      <DeleteButton onClick={() => {}}>x</DeleteButton>
    </PhoneMockup>
  )
  expect(container).toMatchSnapshot()
})
