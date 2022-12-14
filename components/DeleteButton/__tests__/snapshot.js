import { render } from '@testing-library/react'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'

it('Renders Button unchanged', () => {
  const { container } = render(<DeleteButton>Delete</DeleteButton>)
  expect(container).toMatchSnapshot()
})
