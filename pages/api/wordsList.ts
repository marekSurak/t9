import type { NextApiRequest, NextApiResponse } from 'next'

import { wordsListMock } from 'api/mocks/wordsList'
import type { TWordsList } from 'api/types/wordsList'
import { generatePredictions } from 'api/utils/generatePredictions'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TWordsList>
) {
  const { query } = req.query
  const predictions = generatePredictions(query as string)
  const wordsList = predictions.filter((phrase) =>
    wordsListMock.includes(phrase)
  )
  res.status(200).json(wordsList)
}
