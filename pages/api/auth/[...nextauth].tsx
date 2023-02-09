import NextAuth from "next-auth"
import Instagram from "next-auth/providers/instagram"

export const authOptions = {
  providers:[] = [
    Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    })
  ]
}

export default NextAuth(authOptions)