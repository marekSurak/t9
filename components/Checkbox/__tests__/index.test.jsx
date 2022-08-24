import { render, screen, fireEvent } from '@testing-library/react'
import { MemoizedCheckbox as Checkbox, CHECKBOX_ID } from 'components/Checkbox'

describe('Checkbox', () => {
  test('should have default value "on"', () => {
    render(<Checkbox checked={true} onClick={() => {}} />)
    const checkbox = screen.getByRole('checkbox', { id: CHECKBOX_ID })

    expect(checkbox.value).toBe('on')
  })

  test('should toggle', () => {
    render(<Checkbox onClick={() => {}} />)

    const checkbox = screen.getByRole('checkbox', { id: CHECKBOX_ID })
    expect(checkbox.checked).toEqual(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  })
})
