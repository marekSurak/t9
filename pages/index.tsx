import type { NextPage } from 'next'
import { useCallback, useState } from 'react'

import { useGetPredictionsQuery } from 'api/queries/getPredictions'
import { DeleteButton } from 'components/DeleteButton'
import { Display } from 'components/Display'
import { Header } from 'components/Header'
import { Keyboard } from 'components/Keyboard'
import { Layout } from 'components/Layout'
import { PhoneMockup } from 'components/PhoneMockup'
import { Predictions } from 'components/Predictions'

const Home: NextPage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([])
  const { data, isLoading } = useGetPredictionsQuery({ query: enteredNumbers })

  const handleButtonClick = useCallback(
    (value: number) => {
      setEnteredNumbers((prevState) => [...prevState, value])
    },
    [setEnteredNumbers]
  )

  const handleDeleteQuery = useCallback(() => {
    setEnteredNumbers((prevState) => prevState.slice(0, -1))
  }, [setEnteredNumbers])

  return (
    <Layout>
      <PhoneMockup>
        <Header />
        <Display>{enteredNumbers}</Display>
        <Predictions predictions={data} isLoading={isLoading} />
        <Keyboard onButtonClick={handleButtonClick} />
        {enteredNumbers.length ? (
          <DeleteButton onClick={handleDeleteQuery}>x</DeleteButton>
        ) : null}
      </PhoneMockup>
    </Layout>
  )
}

export default Home
