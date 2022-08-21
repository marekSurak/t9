export const getUrlParams = (query: number[] | string[]) => {
  if (!query || !query.length) return ''

  return new URLSearchParams({ query: query.join('') }).toString()
}
