import useSWR from "swr"
import fetcher from "../lib/fetcher"
import {users} from "@prisma/client"
import {useSession} from "next-auth/react"
import Link from "next/link"

const instagramUrl = 'https://www.instagram.com/'

export const Index:React.FC = () => {
  const {data, isLoading} = useSWR('/api/users', fetcher)
  const {data: session} = useSession()

  return (
    <div>
      {session && (
        <>
          Herzlich willkommen <strong><Link href={`${instagramUrl}${session.user?.name}`}>@{session.user?.name}</Link></strong>!

          <h1>Teilnehmende Nutzer</h1>
          {isLoading && (
            <div>Lade Liste...</div>
          )}
          {data && data.map((user:users, key:number) => {
            return <div key={key}><Link href={`${instagramUrl}${user.name}`} target={'_blank'}>@{user.name}</Link></div>
          })}
        </>
      )}
      {!session && (
        <>
          Melden dich an, um fortzufahren!
        </>
      )}
    </div>
  )
}

export default Index