import dbConnect from "../../lib/mongodb"
import User from "../../models/user"

export default async (req:any, res:any) => {
  await dbConnect()

  try {
    const users = await User.find({})
    res.json(users)
  } catch (e) {
    console.log(e)
  }
}