// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { MAX_WORD_LIST_COUNT } from 'apiUtils/constants/wordList'
import type { TPredictions } from 'apiUtils/types/predictions'
import { generatePredictions } from 'apiUtils/utils/generatePredictions'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPredictions>
) {
  const { query } = req.query

  // we are not sending all generated results
  // in real world there is gonna be paging implemented
  const predictions = generatePredictions(query as string).splice(
    0,
    MAX_WORD_LIST_COUNT
  )
  res.status(200).json(predictions)
}
