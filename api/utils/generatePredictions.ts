import { digitsMap } from 'api/constants/digitsMap'

// Function get '23' and should return 'ad, ae, af...'
export const generatePredictions = (data: string) => {
  if (!data) return []

  const splittedDigits = data.split('') //'1, 2'
  const characterList = splittedDigits.map(
    (digit) => digitsMap.get(digit) ?? []
  ) // ['a,b,c'], ['d, e, f']

  return characterList.reduce(
    (a, b) => a?.flatMap((x) => b.map((y) => `${x}${y}`)),
    ['']
  )
}
