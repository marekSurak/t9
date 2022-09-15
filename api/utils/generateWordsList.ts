import { MAX_WORD_LIST_COUNT } from 'api/constants/wordList'

import { assignWordsToDigits } from './assignWordsToDigits'
import { generatePredictions } from './generatePredictions'

// Trying to find appropriate words that starts with prediction
// 4355 -> hello
export const generateWordsList = (query: string) => {
  if (!query) return []

  const wordsHashTable = assignWordsToDigits() // 2 -> [a..., b..., c...]
  const predictions = generatePredictions(query) //23

  // words has to start with a || b || c
  const firstChar = Number(query.charAt(0))

  const wordsListMatch = wordsHashTable.get(firstChar)?.filter((word) => {
    return predictions.find((prediction) => word.startsWith(prediction))
  })

  // we are returning only first X items to keep performance
  // in real world something like paging will be implemented
  return wordsListMatch?.slice(0, MAX_WORD_LIST_COUNT)
}
