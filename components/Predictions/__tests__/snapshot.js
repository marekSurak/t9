import { render } from '@testing-library/react'
import { Predictions } from 'components/Predictions'
import { predictionsMock } from 'apiUtils/mocks/predictions'

it('Renders Predictions unchanged', () => {
  const { container } = render(<Predictions predictions={predictionsMock} />)
  expect(container).toMatchSnapshot()
})
