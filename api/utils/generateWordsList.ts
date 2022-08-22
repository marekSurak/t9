import { MAX_WORD_LIST_COUNT } from 'api/constants/wordList'

import { generatePredictions } from './generatePredictions'

// Trying to find appropriate words that starts with prediction
// 4355 -> hello
export const generateWordsList = (query: string, wordList: string[]) => {
  const predictions = generatePredictions(query)
  const wordListMatch = wordList.filter((word) =>
    predictions.find((prediction) => word.startsWith(prediction))
  )

  return wordListMatch.slice(0, MAX_WORD_LIST_COUNT)
}
