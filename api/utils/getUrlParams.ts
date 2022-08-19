export const getUrlParams = (data: number[]) => {
  return new URLSearchParams({ data: data.join('') }).toString()
}
