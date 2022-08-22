import { render, screen, fireEvent } from '@testing-library/react'
import { DeleteButton } from 'components/DeleteButton'

describe('Delete Button', () => {
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn()
    render(<DeleteButton onClick={handleClick}>Delete!</DeleteButton>)

    fireEvent.click(screen.getByText(/delete/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
