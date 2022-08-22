import type { FC } from 'react'
import React from 'react'

import type { TPredictions } from 'api/types/predictions'

import { PredictionsContainer, PredictionItem, Separator } from './styled'

interface IProps {
  predictions: TPredictions | undefined
  isLoading: boolean
}

export const Predictions: FC<IProps> = ({ predictions, isLoading }) => (
  <PredictionsContainer>
    {isLoading && <PredictionItem>...</PredictionItem>}
    {predictions?.map((prediction, index) => (
      <React.Fragment key={prediction}>
        <PredictionItem>{prediction}</PredictionItem>
        {index < predictions.length - 1 && <Separator />}
      </React.Fragment>
    ))}
  </PredictionsContainer>
)
