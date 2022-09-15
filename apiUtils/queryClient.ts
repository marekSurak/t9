import { QueryClient } from 'react-query'

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: Infinity,
      },
    },
  })
}
