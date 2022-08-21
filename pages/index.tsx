import type { NextPage } from 'next'
import { useState } from 'react'

import { useGetPredictionsQuery } from 'api/queries/getPredictions'
import { Display } from 'components/Display'
import { Keyboard } from 'components/Keyboard'
import { Layout } from 'components/Layout'
import { Predictions } from 'components/Predictions'

const Home: NextPage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([])
  const { data, isLoading } = useGetPredictionsQuery({ query: enteredNumbers })

  const handleButtonClick = (value: number) => {
    setEnteredNumbers((prevState) => [...prevState, value])
  }

  return (
    <Layout>
      <Display>{enteredNumbers}</Display>
      {isLoading && <div>...</div>}
      <Predictions predictions={data} />
      <Keyboard onButtonClick={handleButtonClick} />
    </Layout>
  )
}

export default Home
