import { render } from '@testing-library/react'
import { Button } from 'components/Button'

it('renders homepage unchanged', () => {
  const { container } = render(<Button>Click me!</Button>)
  expect(container).toMatchSnapshot()
})
