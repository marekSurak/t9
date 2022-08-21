import type { FC } from 'react'
import { useCallback, useEffect, useState } from 'react'

import { TimeContainer } from './styled'

export const Time: FC = () => {
  const [time, setTime] = useState<string>('')

  const updateTime = useCallback(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()

    setTime(`${hours}:${minutes}`)
  }, [setTime])

  useEffect(() => {
    updateTime()

    const interval = setInterval(() => updateTime(), 60000)

    return () => {
      clearInterval(interval)
    }
  }, [updateTime])

  return <TimeContainer>{time}</TimeContainer>
}
