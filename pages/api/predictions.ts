// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type { TPredictions } from 'api/types/predictions'
import { generatePredictions } from 'api/utils/generatePredictions'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPredictions>
) {
  const query = req.query.data as string
  const predictions = generatePredictions(query)
  res.status(200).json(predictions)
}
