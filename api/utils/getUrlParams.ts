export const getUrlParams = (data: number[] | string[]) => {
  if (!data || !data.length) return ''

  return new URLSearchParams({ data: data.join('') }).toString()
}
