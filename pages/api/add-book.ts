import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prisma"


export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const { title, author, synopsis } = req.body;

  try {
    const book = await prisma.book.create({
      data: {
        title,
        author,
        synopsis,
      }
    })
    res.status(200).json(book)
  } catch(error) {
    res.status(400).json({ message: 'Failed to add the book'+error })
  }
}
