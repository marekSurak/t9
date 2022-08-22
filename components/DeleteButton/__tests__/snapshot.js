import { render } from '@testing-library/react'
import { DeleteButton } from 'components/DeleteButton'

it('Renders Button unchanged', () => {
  const { container } = render(<DeleteButton>Delete</DeleteButton>)
  expect(container).toMatchSnapshot()
})
