import type { FC } from 'react'

import { SpinnerLine, SpinnerContainer } from './styled'

export const LINES_COUNT = 12

export const Spinner: FC = () => (
  <SpinnerContainer>
    {Array(LINES_COUNT)
      .fill(0)
      .map((_, index) => (
        <SpinnerLine key={index} />
      ))}
  </SpinnerContainer>
)
