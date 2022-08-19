import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { API_URL } from 'api/constants/api'
import type { TPredictions } from 'api/types/predictions'
import type { IRequestException } from 'api/types/requestException'

type IGetUserProps = UseQueryOptions<TPredictions, IRequestException>

const fetchPredictions = async () => {
  const response = await fetch(`${API_URL}/predictions`)
  return (await response.json()) as TPredictions
}

export const useGetPredictionsQuery = ({ ...options }: IGetUserProps) => {
  return useQuery<TPredictions, IRequestException>(
    'predictions',
    async () => await fetchPredictions(),
    { ...options }
  )
}
