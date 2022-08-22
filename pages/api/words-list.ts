import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import wordListPath from 'word-list'

import type { TWordsList } from 'api/types/wordsList'
import { generateWordsList } from 'api/utils/generateWordsList'

const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n')

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TWordsList>
) {
  const { query } = req.query
  const wordsList = generateWordsList(query as string, wordArray)
  res.status(200).json(wordsList)
}
