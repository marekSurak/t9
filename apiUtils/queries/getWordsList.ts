import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'apiUtils/constants/api'
import type { IRequestException } from 'apiUtils/types/requestException'
import type { TWordsList } from 'apiUtils/types/wordsList'
import { getUrlParams } from 'apiUtils/utils/getUrlParams'

interface IProps {
  query: number[]
  isRealWordsSearch: boolean
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
  isRealWordsSearch,
  ...options
}: IGetPredicitonProps) => {
  return useQuery<TWordsList, IRequestException>(
    ['words-list', { query, isRealWordsSearch }],
    async () => await fetchWordsList({ query, isRealWordsSearch }),
    { enabled: isRealWordsSearch, ...options }
  )
}
