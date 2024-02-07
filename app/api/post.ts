import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function post(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await req.body

  res.status(200).json({ data })
}