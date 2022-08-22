import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'api/constants/api'
import type { IRequestException } from 'api/types/requestException'
import type { TWordsList } from 'api/types/wordsList'
import { getUrlParams } from 'api/utils/getUrlParams'

interface IProps {
  query: number[]
}

interface IGetPredicitonProps
  extends UseQueryOptions<TWordsList, IRequestException>,
    IProps {}

const fetchWordsList = async ({ query }: IProps) => {
  const urlParams = getUrlParams(query)
  const response = await fetch(`${API_URL}/words-list?${urlParams}`)
  return (await response.json()) as TWordsList
}

export const useGetWordsListQuery = ({
  query,
  ...options
}: IGetPredicitonProps) => {
  return useQuery<TWordsList, IRequestException>(
    ['words-list', { query }],
    async () => await fetchWordsList({ query }),
    { ...options }
  )
}
