import type { NextPage } from 'next'
import { useCallback, useState } from 'react'

import { useGetPredictionsQuery } from 'api/queries/getPredictions'
import { useGetWordsListQuery } from 'api/queries/getWordsList'
import { MemoizedDeleteButton as DeleteButton } from 'components/DeleteButton'
import { Display } from 'components/Display'
import { MemiozedHeader as Header } from 'components/Header'
import { MemoizedKeyboard as Keyboard } from 'components/Keyboard'
import { PhoneFrame } from 'components/PhoneFrame'
import { Predictions } from 'components/Predictions'

const Home: NextPage = () => {
  const [query, setQuery] = useState<number[]>([])
  const { data, isLoading } = useGetPredictionsQuery({ query })

  const { data: wordsListData } = useGetWordsListQuery({ query })

  console.log('wordsListData', wordsListData)

  const handleButtonClick = useCallback(
    (value: number) => {
      setQuery((prevState) => [...prevState, value])
    },
    [setQuery]
  )

  const handleDeleteQuery = useCallback(() => {
    setQuery((prevState) => prevState.slice(0, -1))
  }, [setQuery])

  return (
    <PhoneFrame>
      <Header />
      <Display>{query}</Display>
      <Predictions predictions={data} isLoading={isLoading} />
      <Keyboard onButtonClick={handleButtonClick} />
      {query.length ? (
        <DeleteButton onClick={handleDeleteQuery}>x</DeleteButton>
      ) : null}
    </PhoneFrame>
  )
}

export default Home
