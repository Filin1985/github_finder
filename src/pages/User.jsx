import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GitHubContext from '../context/github/GutHubContext'

const User = () => {
  const { user, getUser } = useContext(GitHubContext)

  const params = useParams()

  useEffect(() => {
    getUser(params.login)
  }, [])

  return <div>{user.login}</div>
}

export default User
