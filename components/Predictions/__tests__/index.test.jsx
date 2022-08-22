import { getByRole, render } from '@testing-library/react'
import { Predictions } from 'components/Predictions'
import { predictionsMock } from 'api/mocks/predictions'

describe('Predictions', () => {
  test('Renders correctly all items', () => {
    const { getAllByRole } = render(
      <Predictions predictions={predictionsMock} />
    )
    const renderedPredictions = getAllByRole('listitem')

    expect(renderedPredictions.length).toBe(predictionsMock.length)
  })
})
