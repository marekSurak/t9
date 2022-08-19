import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'api/constants/api'
import type { TPredictions } from 'api/types/predictions'
import type { IRequestException } from 'api/types/requestException'
import { getUrlParams } from 'api/utils/getUrlParams'

interface IGetPrediction {
  data: number[]
}

interface IGetPredicitonProps
  extends UseQueryOptions<TPredictions, IRequestException>,
    IGetPrediction {}

const fetchPredictions = async ({ data }: IGetPrediction) => {
  const urlParams = getUrlParams(data)
  const response = await fetch(`${API_URL}/predictions?${urlParams}`)
  return (await response.json()) as TPredictions
}

export const useGetPredictionsQuery = ({
  data,
  ...options
}: IGetPredicitonProps) => {
  return useQuery<TPredictions, IRequestException>(
    ['predictions', { data }],
    async () => await fetchPredictions({ data }),
    { ...options }
  )
}
