import { Header } from '@/globals/Header/Component'
import { Footer } from '@/globals/Footer/Component'
import React from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
