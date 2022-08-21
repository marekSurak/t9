import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'api/constants/api'
import type { TPredictions } from 'api/types/predictions'
import type { IRequestException } from 'api/types/requestException'
import { getUrlParams } from 'api/utils/getUrlParams'

interface IGetPrediction {
  query: number[]
}

interface IGetPredicitonProps
  extends UseQueryOptions<TPredictions, IRequestException>,
    IGetPrediction {}

const fetchPredictions = async ({ query }: IGetPrediction) => {
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
    { enabled: !!query.length, ...options }
  )
}
