import { render } from '@testing-library/react'
import { MemoizedToggle as Toggle } from 'components/Toggle'

describe('Toggle', () => {
  it('Renders Toggle checked', () => {
    const { container } = render(<Toggle checked={true} onClick={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  it('Renders Toggle unchecked', () => {
    const { container } = render(<Toggle checked={false} onClick={() => {}} />)
    expect(container).toMatchSnapshot()
  })
})
