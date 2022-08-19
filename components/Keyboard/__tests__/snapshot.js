import { render } from '@testing-library/react'
import { Keyboard } from 'components/Keyboard'

it('Renders Keyboard unchanged', () => {
  const { container } = render(<Keyboard />)
  expect(container).toMatchSnapshot()
})
