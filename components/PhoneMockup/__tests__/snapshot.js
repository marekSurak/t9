import { render } from '@testing-library/react'
import { PhoneMockup } from 'components/PhoneMockup'
import { Keyboard } from 'components/Keyboard'

it('Renders Phone frame unchanged', () => {
  const { container } = render(
    <PhoneMockup>
      <Keyboard />
    </PhoneMockup>
  )
  expect(container).toMatchSnapshot()
})
