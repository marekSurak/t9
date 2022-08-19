import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'

import { createQueryClient } from 'api/queryClient'

import { globalStyles } from '../styles/global'

const client = createQueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
