import { formatMinutes } from 'utils/formatMinutes'

describe('Utils - format minutes', () => {
  test('Retrun 0 prexif for minutes smaller than 9', () => {
    const minutes = formatMinutes(7)

    expect(minutes).toEqual('07')
  })

  test('Retrun minutes value for value larger than 9', () => {
    const minutes = formatMinutes(17)

    expect(minutes).toEqual('17')
  })
})
