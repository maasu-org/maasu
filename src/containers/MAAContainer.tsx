import React, { FC, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useDocumentTitle } from 'hooks/meta'

interface Props {}

export const MAAContainer: FC<RouteComponentProps & Props> = () => {
  useDocumentTitle('MAASU Alumni Association')

  const [user, setUser] = useState()

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setUser(1)
  }

  const isAuthenticated = Boolean(user)
  return isAuthenticated ? (
    <div>MAA Portal!</div>
  ) : (
    <div className="container">
      <form method="POST" onSubmit={handleLogin}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Log In</button>
      </form>
    </div>
  )
}