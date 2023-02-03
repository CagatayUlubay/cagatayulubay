import React, {useMemo, useState} from "react"


const Users = () => {
  const [userData, setUserData] = useState('')

  const loadUserData = () => {
    const apiCall = async () => {
      const userData = await fetch('/api/users', {
        method: 'GET'
      })
      return userData.json()
    }

    return apiCall().then((loadedUserData) => {
      setUserData(loadedUserData)
    })
  }

  useMemo(() => {
    loadUserData()
  }, [])
  console.log(userData)

  return (
    <div>
      <h1>Users</h1>
      {userData}
    </div>
  )
}

export default React.memo(Users)