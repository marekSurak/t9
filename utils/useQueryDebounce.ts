import { useEffect, useState } from 'react'

import type { TQuery } from 'types/query'

// see https://github.com/tannerlinsley/react-query/issues/293
// see https://usehooks.com/useDebounce/

const DELAY = 500

interface IProps {
  query: TQuery
}

// Used for debouncing query entered from user
export const useQueryDebounce = ({ query }: IProps): TQuery => {
  const [debouncedValue, setDebouncedValue] = useState(query)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(query)
    }, DELAY)

    return () => {
      clearTimeout(handler)
    }
  }, [query])

  return debouncedValue
}
