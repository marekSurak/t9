import type { NextPage } from 'next'
import { useState } from 'react'

import { Keyboard } from 'components/Keyboard'
import { Layout } from 'components/Layout'

const Home: NextPage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([])

  const handleButtonClick = (value: number) => {
    setEnteredNumbers((prevState) => [...prevState, value])
  }

  return (
    <Layout>
      <section>{enteredNumbers}</section>
      <Keyboard onButtonClick={handleButtonClick} />
    </Layout>
  )
}

export default Home
