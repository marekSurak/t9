import { render } from '@testing-library/react'
import { Button } from 'components/Button'

it('Renders Button unchanged', () => {
  const { container } = render(<Button>Click me!</Button>)
  expect(container).toMatchSnapshot()
})
