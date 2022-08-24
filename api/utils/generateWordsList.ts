import { MAX_WORD_LIST_COUNT } from 'api/constants/wordList'

import { generatePredictions } from './generatePredictions'

// Trying to find appropriate words that starts with prediction
// 4355 -> hello
export const generateWordsList = (query: string, wordList: string[]) => {
  if (!query) return []

  const predictions = generatePredictions(query)
  const wordListMatch = wordList.filter((word) =>
    predictions.find((prediction) => word.startsWith(prediction))
  )

  // we are returning only first X items to keep performance
  // in real world something like paging will be implemented
  return wordListMatch.slice(0, MAX_WORD_LIST_COUNT)
}
