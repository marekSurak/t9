import { wordsListMock } from 'api/mocks/wordsList'

import { generatePredictions } from './generatePredictions'

// Trying to find appropriate words that starts with prediction
// 4355 -> hello
export const generateWordsList = (query: string) => {
  const predictions = generatePredictions(query)
  return wordsListMock.filter((word) =>
    predictions.find((prediction) => word.startsWith(prediction))
  )
}
