import { render, screen, fireEvent } from '@testing-library/react'
import { MemoizedToggle as Toggle, TOGGLE_ID } from 'components/Toggle'

describe('Toggle', () => {
  test('should have default value "on"', () => {
    render(<Toggle checked={true} onClick={() => {}} />)
    const checkbox = screen.getByRole('checkbox', { id: TOGGLE_ID })

    expect(checkbox.value).toBe('on')
  })

  test('should toggle', () => {
    render(<Toggle onClick={() => {}} />)

    const checkbox = screen.getByRole('checkbox', { id: TOGGLE_ID })
    expect(checkbox.checked).toEqual(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
  })
})
