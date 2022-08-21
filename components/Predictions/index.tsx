import type { FC } from 'react'
import React from 'react'

import type { TPredictions } from 'api/types/predictions'

import { PredictionsContainer, PredictionItem, Separator } from './styled'

interface IProps {
  predictions: TPredictions | undefined
}

export const Predictions: FC<IProps> = ({ predictions }) => {
  if (!predictions?.length) return null

  return (
    <PredictionsContainer>
      {predictions.map((prediction) => (
        <React.Fragment key={prediction}>
          <PredictionItem>{prediction}</PredictionItem>
          <Separator />
        </React.Fragment>
      ))}
    </PredictionsContainer>
  )
}
