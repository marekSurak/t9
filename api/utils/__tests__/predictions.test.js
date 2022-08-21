import { generatePredictions } from 'api/utils/generatePredictions'

describe('Api utils - generatePredictions', () => {
  test('Retrun empty array when no input provided', () => {
    const predictions = generatePredictions()

    expect(predictions).toEqual([])
  })

  test('Retrun empty array when empty string passed as a prop', () => {
    const predictions = generatePredictions('')

    expect(predictions).toEqual([])
  })

  test('Retrun empty array when null passed as a prop', () => {
    const predictions = generatePredictions(null)

    expect(predictions).toEqual([])
  })

  test('Retrun empty array when undefined passed as a prop', () => {
    const predictions = generatePredictions(undefined)

    expect(predictions).toEqual([])
  })

  test('Retrun empty array when 1 passed as a prop', () => {
    const predictions = generatePredictions('1')

    expect(predictions).toEqual([''])
  })

  test('Retrun correct predictions for "12"', () => {
    const predictions = generatePredictions('12')

    expect(predictions).toEqual(['a', 'b', 'c'])
  })

  test('Retrun correct predictions for "23"', () => {
    const predictions = generatePredictions('23')

    expect(predictions).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ])
  })

  test('Retrun correct predictions for "1231"', () => {
    const predictions = generatePredictions('1231')

    expect(predictions).toEqual([
      'ad',
      'ae',
      'af',
      'bd',
      'be',
      'bf',
      'cd',
      'ce',
      'cf',
    ])
  })
})
