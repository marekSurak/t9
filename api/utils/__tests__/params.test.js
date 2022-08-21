import { getUrlParams } from 'api/utils/getUrlParams'

describe('Api utils - getUrlParams', () => {
  test('Retrun empty string when no params provided', () => {
    const params = getUrlParams()

    expect(params).toEqual('')
  })

  test('Retrun empty string when empty array provided', () => {
    const params = getUrlParams([])

    expect(params).toEqual('')
  })

  test('Retrun correct params for [1,2,3]', () => {
    const params = getUrlParams([1, 2, 3])

    expect(params).toEqual('query=123')
  })

  test('Retrun correct params for ["1","2","3"]', () => {
    const params = getUrlParams(['1', '2', '3'])

    expect(params).toEqual('query=123')
  })
})
