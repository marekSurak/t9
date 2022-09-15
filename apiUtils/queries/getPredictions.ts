import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'apiUtils/constants/api'
import type { TPredictions } from 'apiUtils/types/predictions'
import type { IRequestException } from 'apiUtils/types/requestException'
import { getUrlParams } from 'apiUtils/utils/getUrlParams'

interface IProps {
  query: number[]
}

interface IGetPredicitonProps
  extends UseQueryOptions<TPredictions, IRequestException>,
    IProps {}

const fetchPredictions = async ({ query }: IProps) => {
  const urlParams = getUrlParams(query)
  const response = await fetch(`${API_URL}/predictions?${urlParams}`)
  return (await response.json()) as TPredictions
}

export const useGetPredictionsQuery = ({
  query,
  ...options
}: IGetPredicitonProps) => {
  return useQuery<TPredictions, IRequestException>(
    ['predictions', { query }],
    async () => await fetchPredictions({ query }),
    { ...options }
  )
}
