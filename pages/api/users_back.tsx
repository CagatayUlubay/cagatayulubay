import React from "react"
/**import clientPromise from "../../lib/mongodb";

export default async (req:any, res:any) => {
  try {
    const client = await clientPromise
    const db = client.db("trs")

    const users = await db
      .collection("users")
      .find({})
      .sort({})
      .toArray()

    res.json(users)
  } catch (e) {
    console.log(e)
  }
}**/