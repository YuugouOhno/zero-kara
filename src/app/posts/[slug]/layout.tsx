import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '投稿ページ',
  description: '投稿のページです。',
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
