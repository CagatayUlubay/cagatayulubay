import useSWR from "swr"
import fetcher from "../lib/fetcher"
import {users} from "@prisma/client"

export const Index = () => {
  const {data, error, isLoading} = useSWR('/api/users', fetcher)

  if (error) return <div>Error..</div>

  return (
    <>
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