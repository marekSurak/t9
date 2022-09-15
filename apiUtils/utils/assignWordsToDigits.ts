import { generateWordsHashMap } from './generateWordsHashMap'

// import * as wordsHash from '../constants/wordsHashMap.json'

// Hash table where for each digit we assign words
// For number 2 we would have all words beginning with a,b,c
// 2 -> 'a..., b..., c...'
export const assignWordsToDigits = () => {
  const wordsHashTable = generateWordsHashMap()

  const digitsHashMap = new Map([
    [
      2,
      [
        ...(wordsHashTable.get('a') ?? []),
        ...(wordsHashTable.get('b') ?? []),
        ...(wordsHashTable.get('c') ?? []),
      ],
    ],
    [
      3,
      [
        ...(wordsHashTable.get('d') ?? []),
        ...(wordsHashTable.get('e') ?? []),
        ...(wordsHashTable.get('f') ?? []),
      ],
    ],
    [
      4,
      [
        ...(wordsHashTable.get('g') ?? []),
        ...(wordsHashTable.get('h') ?? []),
        ...(wordsHashTable.get('i') ?? []),
      ],
    ],
    [
      5,
      [
        ...(wordsHashTable.get('j') ?? []),
        ...(wordsHashTable.get('k') ?? []),
        ...(wordsHashTable.get('l') ?? []),
      ],
    ],
    [
      6,
      [
        ...(wordsHashTable.get('m') ?? []),
        ...(wordsHashTable.get('n') ?? []),
        ...(wordsHashTable.get('o') ?? []),
      ],
    ],
    [
      7,
      [
        ...(wordsHashTable.get('p') ?? []),
        ...(wordsHashTable.get('q') ?? []),
        ...(wordsHashTable.get('r') ?? []),
        ...(wordsHashTable.get('s') ?? []),
      ],
    ],
    [
      8,
      [
        ...(wordsHashTable.get('t') ?? []),
        ...(wordsHashTable.get('u') ?? []),
        ...(wordsHashTable.get('v') ?? []),
      ],
    ],
    [
      9,
      [
        ...(wordsHashTable.get('w') ?? []),
        ...(wordsHashTable.get('x') ?? []),
        ...(wordsHashTable.get('y') ?? []),
        ...(wordsHashTable.get('z') ?? []),
      ],
    ],
  ])

  return digitsHashMap
}
