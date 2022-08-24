import type { NextApiRequest, NextApiResponse } from 'next'

import { wordsListMock } from 'api/mocks/wordsList'
import type { TWordsList } from 'api/types/wordsList'
import { generateWordsList } from 'api/utils/generateWordsList'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TWordsList>
) {
  const { query } = req.query
  const wordsList = generateWordsList(query as string, wordsListMock)
  res.status(200).json(wordsList)
}
