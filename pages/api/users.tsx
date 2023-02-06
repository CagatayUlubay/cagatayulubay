import { PrismaClient, users } from '@prisma/client'
import {NextApiRequest, NextApiResponse} from "next"

const prisma = new PrismaClient()

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  const allUsers:users[] = await prisma.users.findMany()
  res.json(allUsers)
}
export default handler