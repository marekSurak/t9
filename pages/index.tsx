import type { NextPage } from 'next'
import { useState } from 'react'

import { Keyboard } from 'components/Keyboard'

const Home: NextPage = () => {
  const [enteredNumbers, setEnteredNumbers] = useState<number[]>([])

  const handleButtonClick = (value: number) => {
    setEnteredNumbers((prevState) => [...prevState, value])
  }

  return (
    <main>
      <section>{enteredNumbers}</section>
      <Keyboard onButtonClick={handleButtonClick} />
    </main>
  )
}

export default Home
