import type { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'

import { createQueryClient } from 'api/queryClient'
import { Layout } from 'components/Layout'

import { globalStyles } from '../styles/global'

const client = createQueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <QueryClientProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default MyApp
