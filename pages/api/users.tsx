import { PrismaClient, users } from '@prisma/client'
import {NextApiRequest, NextApiResponse} from "next"

const prisma = new PrismaClient()

const handler = async (req:NextApiRequest,res:NextApiResponse) => {
  const {method} = req;

  switch (method) {
    case "POST":
      const {username} = JSON.parse(req.body)

      if (username) {
        const existingUser = await prisma.users.findMany({
          where: {
            name: username
          }
        })

        if (existingUser.length) {
          res.json(existingUser)
          break
        }

        const newUser = await prisma.users.create({
          data: {
            name: username,
            closes: "0"
          }
        })
        res.json(newUser)
        break
      }
      res.json({})
      break

    case "GET":
    default:
      const allUsers:users[] = await prisma.users.findMany()
      res.json(allUsers)
      break
  }

}
export default handler