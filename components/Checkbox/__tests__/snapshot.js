import { render } from '@testing-library/react'
import { MemoizedCheckbox as Checkbox } from 'components/Checkbox'

describe('Toggle', () => {
  it('Renders Toggle checked', () => {
    const { container } = render(<Checkbox checked={true} onClick={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  it('Renders Toggle unchecked', () => {
    const { container } = render(
      <Checkbox checked={false} onClick={() => {}} />
    )
    expect(container).toMatchSnapshot()
  })
})
