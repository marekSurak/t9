import { generateWordsList } from 'apiUtils/utils/generateWordsList'
import { wordsListMock } from 'apiUtils/mocks/wordsList'

describe('Api utils - generateWordsList', () => {
  test('Retrun empty array when no input provided', () => {
    const wordsList = generateWordsList()

    expect(wordsList).toEqual([])
  })

  test('Retrun empty array when empty string passed as a prop', () => {
    const wordsList = generateWordsList('')

    expect(wordsList).toEqual([])
  })

  test('Retrun empty array when null passed as a prop', () => {
    const wordsList = generateWordsList(null)

    expect(wordsList).toEqual([])
  })

  test('Retrun empty array when undefined passed as a prop', () => {
    const wordsList = generateWordsList(undefined)

    expect(wordsList).toEqual([])
  })

  test('Retrun correct result when passed "43556"', () => {
    const wordsList = generateWordsList('43556', wordsListMock)
    expect(wordsList).toContain('hello')
  })

  test('Retrun correct result when passed "75263"', () => {
    const wordsList = generateWordsList('75263', wordsListMock)
    expect(wordsList).toContain('plane')
  })
})
