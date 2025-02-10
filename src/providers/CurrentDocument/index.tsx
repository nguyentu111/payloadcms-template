'use client'
import { Page, Post } from '@/payload-types'
import React from 'react'

export const currentDocumentContext = React.createContext<Post | Page | null>(null)
export const DocumentProvider = ({
  document,
  children,
}: {
  document: Post | Page
  children: React.ReactNode
}) => {
  return (
    <currentDocumentContext.Provider value={document}>{children}</currentDocumentContext.Provider>
  )
}
export const useCurrentDocument = () => {
  const document = React.useContext(currentDocumentContext)
  return document
}
