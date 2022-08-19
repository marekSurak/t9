import type { UseQueryOptions } from 'react-query'
import { useQuery } from 'react-query'

import { apiClient } from 'api/apiClient'
import type { TPredictions } from 'api/types/predictions'
import type { IRequestException } from 'api/types/requestException'

type IGetUserProps = UseQueryOptions<TPredictions, IRequestException>

const fetchPredictions = async (): Promise<TPredictions> => {
  const response = await apiClient.get('users/me', {})
  return await response.json()
}

export const useGetPredictionsQuery = ({ ...options }: IGetUserProps) => {
  return useQuery<TPredictions, IRequestException>(
    'predictions',
    async () => await fetchPredictions(),
    { ...options }
  )
}
