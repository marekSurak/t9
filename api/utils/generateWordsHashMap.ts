import fs from 'fs'
import wordListPath from 'word-list'

export const generateWordsHashMap = () => {
  const wordsHashTable: Map<string, string[]> = new Map()
  const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

  wordArray.forEach((word) => {
    const firstChar = word[0]
    const hashValue = (wordsHashTable.get(firstChar) as string[]) || []

    wordsHashTable.set(firstChar, (hashValue.push(word), hashValue))
  })

  // fs.writeFileSync(
  //   './api/constants/wordsHashMap.json',
  //   // @ts-ignore
  //   JSON.stringify([...wordsHashTable]),
  //   'utf8'
  // )

  return wordsHashTable
}
