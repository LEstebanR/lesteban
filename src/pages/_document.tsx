/* eslint-disable @next/next/no-title-in-document-head */
import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { Background } from '@/components/UI/background'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>LEsteban</title>
      </Head>
      <body>
        <Background />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
