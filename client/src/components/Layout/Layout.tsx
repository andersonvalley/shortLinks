import React, { FC } from 'react'
import { Header } from '../Header/Header'

interface Props {
  children: React.ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  )
}
