import useSWR from "swr"
import fetcher from "../lib/fetcher"
import {users} from "@prisma/client"
import {signIn, useSession} from "next-auth/react";

export const Index = () => {
  const {data, error, isLoading} = useSWR('/api/users', fetcher)
  const {data: session} = useSession()

  if (error) return <div>Error..</div>

  return (
    <>
      Login Status: {`\u0020`}
      {session && (
        <>
          Angemeldet als <strong>@{session.user?.name}</strong>
        </>
      )}
      {!session && (
        <>
          Nicht angemeldet
          <button onClick={() => signIn()}>Anmelden über Instagram Account</button>
        </>
      )}


      <h1>Users</h1>
      {isLoading && (
        <div>Loading...</div>
      )}
      {data && data.map((user:users) => {
        return <div>{user.name}</div>
      })}
    </>
  )
}

export default Index