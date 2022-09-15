import type { NextApiRequest, NextApiResponse } from 'next'

import type { TWordsList } from 'apiUtils/types/wordsList'
import { generateWordsList } from 'apiUtils/utils/generateWordsList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TWordsList>
) {
  const { query } = req.query

  const wordsList = generateWordsList(query as string) ?? []
  res.status(200).json(wordsList)
}
