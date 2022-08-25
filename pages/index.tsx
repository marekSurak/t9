import type { NextPage } from 'next'
import { useCallback, useState } from 'react'

import { useGetPredictionsQuery } from 'api/queries/getPredictions'
import { useGetWordsListQuery } from 'api/queries/getWordsList'
import { MemoizedCheckbox as Checkbox } from 'components/Checkbox'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'
import { Display } from 'components/Display'
import { MemiozedHeader as Header } from 'components/Header'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { PhoneFrame } from 'components/PhoneFrame'
import { Predictions } from 'components/Predictions'
import { Seo } from 'components/Seo'
import type { TQuery } from 'types/query'
import { useQueryDebounce } from 'utils/useQueryDebounce'

const Home: NextPage = () => {
  const [query, setQuery] = useState<TQuery>([])

  // detect wheter user checked real word list
  const [isRealWordsSearch, setRealWordsSearch] = useState<boolean>(false)

  // debounce query entered by user to not overload API
  const debouncedQuery = useQueryDebounce({ query })

  const { data: predictionsData, isLoading: isPredictionsLoading } =
    useGetPredictionsQuery({ query: debouncedQuery })

  const { data: wordsListData, isLoading: isWordsListLoading } =
    useGetWordsListQuery({
      query: debouncedQuery,
      isRealWordsSearch,
    })

  const handleButtonClick = useCallback(
    (value: number) => {
      setQuery((prevState) => [...prevState, value])
    },
    [setQuery]
  )

  const handleDeleteQuery = useCallback(() => {
    setQuery((prevState) => prevState.slice(0, -1))
  }, [setQuery])

  const handleToggle = useCallback(() => {
    setRealWordsSearch((checked) => !checked)
  }, [setRealWordsSearch])

  const hasQuery = !!query.length
  const isLoading = hasQuery && (isPredictionsLoading || isWordsListLoading)

  return (
    <>
      <Seo />
      <PhoneFrame>
        <Header />
        <Display>{query}</Display>
        <Predictions
          predictions={isRealWordsSearch ? wordsListData : predictionsData}
          isLoading={isLoading}
        />
        <Checkbox checked={isRealWordsSearch} onClick={handleToggle} />
        <Keyboard onButtonClick={handleButtonClick} />
        {hasQuery ? (
          <DeleteButton onClick={handleDeleteQuery}>x</DeleteButton>
        ) : null}
      </PhoneFrame>
    </>
  )
}

export default Home
